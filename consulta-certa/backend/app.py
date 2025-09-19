from flask import Flask, request, jsonify
from flask_cors import CORS
import oracledb
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# Config Oracle
USER = "rm562999"
PASSWORD = "081105"
HOST = "oracle.fiap.com.br"
PORT = 1521
SERVICE_NAME = "orcl"

def get_connection():
    try:
        conn = oracledb.connect(
            user=USER,
            password=PASSWORD,
            host=HOST,
            port=PORT,
            service_name=SERVICE_NAME
        )
        return conn
    except Exception as e:
        print(f"Erro na conexão Oracle: {e}")
        return None

def get_next_id(conn, table_name, id_column):
    cursor = conn.cursor()
    cursor.execute(f"SELECT NVL(MAX({id_column}), 0) + 1 FROM {table_name}")
    next_id = cursor.fetchone()[0]
    cursor.close()
    return next_id

@app.route("/api/set-reminder", methods=["POST"])
def set_reminder():
    data = request.get_json()
    email = data.get("email")
    telefone = data.get("telefone")
    data_consulta_str = data.get("data_consulta")  # Ex: "25/07/2024 14:30"
    especialidade = data.get("especialidade", "geral")

    if not email or not data_consulta_str:
        return jsonify({"error": "Email e data_consulta são obrigatórios"}), 400

    try:
        data_consulta = datetime.strptime(data_consulta_str, "%d/%m/%Y %H:%M")
    except ValueError:
        return jsonify({"error": "Formato de data_consulta inválido. Use DD/MM/YYYY HH:MM"}), 400

    conn = get_connection()
    if not conn:
        return jsonify({"error": "Erro ao conectar ao banco de dados"}), 500

    try:
        cursor = conn.cursor()

        # 1. Verificar se paciente existe pelo email, senão inserir
        cursor.execute("SELECT id_paciente FROM pacientes WHERE email = :email", {"email": email})
        paciente = cursor.fetchone()
        if paciente:
            id_paciente = paciente[0]
        else:
            id_paciente = get_next_id(conn, "pacientes", "id_paciente")
            cursor.execute("""
                INSERT INTO pacientes (id_paciente, nome, email, telefone)
                VALUES (:id_paciente, :nome, :email, :telefone)
            """, {
                "id_paciente": id_paciente,
                "nome": "Paciente",  # ou receber no JSON
                "email": email,
                "telefone": telefone or ""
            })
    
        # 2. Inserir consulta
        id_consulta = get_next_id(conn, "consultas", "id_consulta")
        cursor.execute("""
            INSERT INTO consultas (id_consulta, especialidade, data_consulta, status, id_paciente)
            VALUES (:id_consulta, :especialidade, :data_consulta, 'A', :id_paciente)
        """, {
            "id_consulta": id_consulta,
            "especialidade": especialidade,
            "data_consulta": data_consulta,
            "id_paciente": id_paciente
        })

        # 3. Criar lembretes 48h e 24h antes da consulta
        lembretes = []
        for horas in [48, 24]:
            id_lembrete = get_next_id(conn, "lembretes", "id_lembrete")
            data_envio = data_consulta - timedelta(hours=horas)
            cursor.execute("""
                INSERT INTO lembretes (id_lembrete, email, telefone, data_envio, id_consulta)
                VALUES (:id_lembrete, :email, :telefone, :data_envio, :id_consulta)
            """, {
                 "id_lembrete": id_lembrete,
                 "email": email,
                 "telefone": telefone,
                 "data_envio": data_envio,
                 "id_consulta": id_consulta
            })
            lembretes.append({
                "id_lembrete": id_lembrete,
                "canal_envio": "email",
                "data_envio": data_envio.strftime("%d/%m/%Y %H:%M"),
                "id_consulta": id_consulta
            })

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({
            "message": "Consulta e lembretes cadastrados com sucesso",
            "id_consulta": id_consulta,
            "lembretes": lembretes
        })

    except Exception as e:
        import traceback
        traceback.print_exc()  # imprime o erro completo no console
        if conn:
            conn.rollback()
            conn.close()
        return jsonify({"error": "Erro ao salvar dados"}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)



# 📖 Consulta Certa
Plataforma desenvolvida para auxilixar pacientes do HC a acessar o Portal do Paciente e realizar suas teleconsultas, fornecendo guias e informações. O projeto tem como missão reduzir a taxa de absenteísmo nas teleconsultas.

---

## 🚀 Tecnologias Usadas

### Frontend
- **React** (Vite + TypeScript)  
- **Tailwind CSS** para estilização responsiva  
- **ESLint** para padronização de código  

### Backend
- **Python (Flask)** para a API  
- **APScheduler** para agendamento de tarefas  
- **JSON (db.json)** como base de dados simulada  

### Outros
- **PostCSS**  
- **Vercel** (deploy do frontend)  

---

## 👥 Integrantes

| Nome | RM |
|------|---------|
| Felipe Ferrete Lemes | RM562999 |
| Gustavo Bosak Santos | RM566315 |
| Nikolas Henrique de Souza Lemes Brisola | RM564371 |

> 1TDSPF - ADS

---

## 💻 Execução

Para rodar o projeto, execute os comandos abaixo

```
npm install
npm run api
```

Após isso, acesse a pasta backend

```
cd backend
```

E execute

```
.\venv\Scripts\activate
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
```

Se estiver no bash:

```
$env:SENDGRID_API_KEY="chave da api"
```

Se estiver no command prompt

```
set SENDGRID_API_KEY="chave da api"
```

Depois execute o arquivo app.py

```
python app.py
```

Por fim

```
npm run dev
```

---

## 🖼️ Imagens e Ícones

O projeto utiliza ícones e imagens organizados na pasta `public/media/` e em `src/assets/`.

![Tela inicial do Consulta Certa](./public/media/demo-plataforma.gif)

---

## 📂 Estrutura de diretórios
```
react-main/
├── backend/           # Backend em Flask (API)
│   ├── app.py
│   ├── requirements.txt
│   └── venv/          # Ambiente virtual
├── public/            # Imagens e assets
├── src/               # Código-fonte React
│   ├── assets/        # Ícones e imagens
│   ├── components/    # Componentes reutilizáveis
│   ├── pages/         # Páginas principais
│   ├── App.tsx
│   └── main.tsx
├── db.json            # Base de dados mock
├── package.json       # Dependências do frontend
├── vite.config.ts     # Configuração do Vite
└── README.md
```

---

## 🔗 Links do Projeto
🌐 Aplicação Online: [Consulta Certa](https://consulta-certa-dusky.vercel.app)

▶️ Vídeo no YouTube: [Apresentação do site](https://youtube.com/)

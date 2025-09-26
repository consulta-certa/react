# 📖 Consulta Certa
Plataforma desenvolvida para auxilixar pacientes do HC a acessar o Portal do Paciente e realizar suas teleconsultas, fornecendo guias, informações e lembretes automáticos. O projeto tem como missão reduzir a taxa de absenteísmo nas teleconsultas.

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
react/
├── backend/           # Backend em Flask (API)
│   ├── app.py
│   ├── requirements.txt
│   └── venv/          # Ambiente virtual
├── public/            
│   ├── fonts/         # Arquivos de fonte
│   └── media/         # Imagens e videos
├── src/               # Código-fonte React
│   ├── assets/        # Imagens e assets
│   ├── components/    # Componentes reutilizáveis
│   ├── context/       # Contexto de autentificação de entrada
│   ├── routes/        # Páginas principais
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── db.json            # Base de dados
├── estlint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🔗 Links do Projeto
🌐 Aplicação Online: <a href='https://consulta-certa-dusky.vercel.app' target='_'>Consulta Certa</a>

▶️ Vídeo no YouTube: <a href='https://youtube.com/' target='_'>Apresentação do site</a>

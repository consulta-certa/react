import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Ajuda from "./routes/Ajuda";
import Avaliacoes from "./routes/Avaliacoes";
import Categorias from "./routes/Categorias";
import Contato from "./routes/Contato";
import Erro from "./routes/Erro";
import Guia from "./routes/Guia";
import Home from "./routes/Home";
import Informacoes from "./routes/Informacoes";
import Lembretes from "./routes/Lembretes";
import Perfil from "./routes/Perfil";
import QuemSomos from "./routes/QuemSomos";
import Termos from "./routes/Termos";
import Cadastro from "./routes/Cadastro";
import Entrada from "./routes/Entrada";

const router = createBrowserRouter(
    [{
        path: '/',
        element: <App/>,
        errorElement: <Erro/>,
        children: [
            { path: '/ajuda', element: <Ajuda/>},
            { path: '/avaliar-teleconsulta', element: <Avaliacoes/>},
            { path: '/cadastrar', element: <Cadastro/>},
            { path: '/guias', element: <Categorias/>},
            { path: '/contato', element: <Contato/>},
            { path: '/entrar', element: <Entrada/>},
            { path: '/guias/guia/:id', element: <Guia/>},
            { path: '/', element: <Home/>},
            { path: '/informacoes/:id', element: <Informacoes/>},
            { path: '/lembretes', element: <Lembretes/>},
            { path: '/perfil', element: <Perfil/>},
            { path: '/quem-somos', element: <QuemSomos/>},
            { path: '/termos', element: <Termos/>}
        ] 
    }]
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
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

const router = createBrowserRouter(
    [{
        path: '/',
        element: <App/>,
        errorElement: <Erro/>,
        children: [
            { path: '/ajuda', element: <Ajuda/>},
            { path: '/avaliar-teleconsulta', element: <Avaliacoes/>},
            { path: '/guias', element: <Categorias/>},
            { path: '/contato', element: <Contato/>},
            { path: '/guias/guia', element: <Guia/>},
            { path: '/', element: <Home/>},
            { path: '/informacoes', element: <Informacoes/>},
            { path: '/marcar-lembrete/:id', element: <Lembretes/>},
            { path: '/perfil/:id', element: <Perfil/>},
            { path: '/quem-somos', element: <QuemSomos/>}
        ] 
    }]
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
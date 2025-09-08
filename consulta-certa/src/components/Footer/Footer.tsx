import { Link } from "react-router-dom"

function Footer() {    return (
        <footer className="flex gap-[2vw] justify-between items-center bg-cc-azul w-[80vw] mb-[2vh] rounded-2xl py-[1vh] px-[2vw] min-h-[10vh] text-white">
            <p>&copy; 2025 Consulta Certa</p>
            <nav className="flex gap-[2vw]">
                <Link to={'/termos-de-uso'}>Termos de uso</Link>
                <Link to={'/politicas-de-privacidade'}>Políticas de Privacidade</Link>
            </nav>
        </footer>
    )
}

export default Footer
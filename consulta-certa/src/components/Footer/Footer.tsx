import { Link } from "react-router-dom"

function Footer() {    return (
        <footer>
            <p>&copy; 2025 Consulta Certa</p>
            <nav>
                <Link to={'/termos-de-uso'}>Termos de uso</Link>
                <Link to={'/politicas-de-privacidade'}>Políticas de Privacidade</Link>
            </nav>
        </footer>
    )
}

export default Footer
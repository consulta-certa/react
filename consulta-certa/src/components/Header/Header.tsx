import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="logos">
                <a href="https://www.hc.fm.usp.br/hc/portal/" target="_">
                    <img src="" alt="" className="logo" />
                </a>
                <Link to="/">
                    <img src="" alt="" className="logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <Link to='/guias'>Guia</Link>
                    </li>
                    <li>
                        <Link to='/ajuda'>Ajuda</Link>
                    </li>
                    <li>
                        <Link to='/quem-somos'>Quem somos</Link>
                    </li>
                    <li>
                        <Link to='/contato'>Contato</Link>
                    </li>
                    <li>
                        <Link to='/avaliar-teleconsulta'>Avaliações</Link>
                    </li>
                    <li>
                        <Link to='/marcar-lembrete/:id'>Lembretes</Link>
                    </li>
                    <li>
                        <Link to='/perfil/:id'>Perfil</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
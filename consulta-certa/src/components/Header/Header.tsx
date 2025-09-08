import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/images/logo.svg'
import logoHC from '../../assets/images/logo_hc.svg'

function Header() {
    return (
        <header className="flex items-center justify-between w-full shadow-md py-[2vh] px-[5vw]">
            <div className="flex gap-[1vw]">
                <a href="https://www.hc.fm.usp.br/hc/portal/" target="_">
                    <img src={logoHC} alt="Logo do HC" className="h-[8vh]" />
                </a>
                <Link to="/">
                    <img src={logo} alt="Logo da página Consulta Certa" className="h-[8vh]" />
                </Link>
            </div>
            <nav>
                <ul className="flex items-center justify-center gap-[1vw]">
                    <li>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Início</NavLink>
                    </li>
                    <li>
                        <NavLink to='/guias' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Guia</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ajuda' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Ajuda</NavLink>
                    </li>
                    <li>
                        <NavLink to='/quem-somos' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Quem somos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contato' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Contato</NavLink>
                    </li>
                    <li>
                        <NavLink to='/avaliar-teleconsulta' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Avaliações</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lembretes' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Lembretes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/perfil/:id' className={({ isActive }) =>
                            isActive
                                ? 'text-cc-azul font-bold transition-all duration-300 ease-in-out'
                                : 'text-[#2d2d2d] transition-all duration-300 ease-in-out'
                        }>Perfil</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
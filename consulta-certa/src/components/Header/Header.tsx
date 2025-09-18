import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import logoHC from '../../assets/images/logo_hc.svg';
import NavElement from "./NavElement";

import { AiFillHome } from "react-icons/ai";
import { BiSolidBookReader } from "react-icons/bi";
import { MdLiveHelp } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoMdChatboxes } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { TbBellRingingFilled } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";

function Header() {
    return (
        <header className="header">
            <div className="flex gap-[1vw]">
                <a href="https://www.hc.fm.usp.br/hc/portal/" target="_">
                    <img src={logoHC} alt="Logo do HC" className="logo" />
                </a>
                <Link to="/">
                    <img src={logo} alt="Logo da página Consulta Certa" className="logo" />
                </Link>
            </div>
            <nav className="block max-lg:hidden">
                <ul>
                    <NavElement path="/" icon={AiFillHome} label="Início"/>
                    <NavElement path="/guias" icon={BiSolidBookReader} label="Guias"/>
                    <NavElement path="/ajuda" icon={MdLiveHelp} label="Ajuda"/>
                    <NavElement path="/quem-somos" icon={RiTeamFill} label="Quem somos"/>
                    <NavElement path="/contato" icon={IoMdChatboxes} label="Contato"/>
                    <NavElement path="/avaliar-teleconsulta" icon={MdRateReview} label="Avaliações"/>
                    <NavElement path="/lembretes" icon={TbBellRingingFilled} label="Lembretes"/>
                    <NavElement path="/perfil" icon={IoPersonCircle} label="Perfil"/>
                </ul>
            </nav>
        </header>
    )
}

export default Header
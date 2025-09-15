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
        <header className="flex items-center justify-between w-full shadow-md py-[2vh] px-[5vw]">
            <div className="flex gap-[1vw]">
                <a href="https://www.hc.fm.usp.br/hc/portal/" target="_">
                    <img src={logoHC} alt="Logo do HC" className="h-[8vh]" />
                </a>
                <Link to="/">
                    <img src={logo} alt="Logo da página Consulta Certa" className="h-[8vh]" />
                </Link>
            </div>
            <nav className="max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full bg-white">
                <ul className="flex items-center justify-center gap-[1vw]">
                    <NavElement path="/" icon={AiFillHome} label="Início"/>
                    <NavElement path="/guias" icon={BiSolidBookReader} label="Guias"/>
                    <NavElement path="/ajuda" icon={MdLiveHelp} label="Ajuda"/>
                    <NavElement path="/quem-somos" icon={RiTeamFill} label="Quem somos"/>
                    <NavElement path="/contato" icon={IoMdChatboxes} label="Contato"/>
                    <NavElement path="/avaliar-teleconsulta" icon={MdRateReview} label="Avaliações"/>
                    <NavElement path="/lembretes" icon={TbBellRingingFilled} label="Lembretes"/>
                    <NavElement path="/perfil/:id" icon={IoPersonCircle} label="Perfil"/>
                </ul>
            </nav>
        </header>
    )
}

export default Header
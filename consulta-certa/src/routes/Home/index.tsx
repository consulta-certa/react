import Titulo from "../../components/Titulo/Titulo"
import Hero from '../../assets/images/carrossel-template1.png'
import HomeButton from "../../components/HomeButton/HomeButton"
import { BiSolidBookReader } from "react-icons/bi";
import { FaLaptopMedical } from "react-icons/fa";
import { MdMedicalInformation } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { RiSpeakAiFill } from "react-icons/ri";
import { BsFillPinMapFill } from "react-icons/bs";

import logoBID from '../../assets/images/logo_parceiro.png'
import logoBP from '../../assets/images/logo_parceiro1.png'
import logoUmane from '../../assets/images/logo_parceiro2.png'
import logoSSSP from '../../assets/images/logo_parceiro3.png'
import Linha from "../../components/Linha/Linha";

function Home() {
    return (
        <main>
            <Titulo titulo="Página Inicial" />
            <section className="flex max-md:flex-col-reverse items-center justify-between min-h-[70vh]">
                <div className="flex flex-col items-center w-[30vw] min-w-[280px] px-[2vw]">
                    <ul className="flex justify-center w-full overflow-x-hidden gap-[2vw]">
                        {/* Ainda por replicar em componentização */}
                        <li className="card-inicial">
                            <img src={Hero} alt="" />
                            <p>GUIA: como ver minha teleconsulta</p>
                        </li>
                        <li className="card-inicial">
                            <img src={Hero} alt="" />
                            <p>GUIA: como ver minha teleconsulta</p>
                        </li>
                        <li className="card-inicial">
                            <img src={Hero} alt="" />
                            <p>GUIA: como ver minha teleconsulta</p>
                        </li>
                    </ul>
                    <div className="flex justify-center gap-4">
                        <span className="size-4 rounded-full bg-cc-azul mt-[2vh]"></span>
                        <span className="size-4 rounded-full border-[0.25rem] border-gray-300 bg-gray-400 mt-[2vh]"></span>
                        <span className="size-4 rounded-full border-[0.25rem] border-gray-300 bg-gray-400 mt-[2vh]"></span>
                    </div>
                </div>
                <div className="max-w-[450px] min-w-[280px] p-4">
                    <h2 className="text-3xl font-semibold">Você não está sozinho, estamos aqui para te ajudar.</h2>
                    <Linha/>
                    <p>Precisando de uma ajuda mais rápida? Veja <span className="inline md:hidden">acima</span><span className="hidden md:inline">ao lado</span> se sua dúvida se encaixa em algum dos guias.</p>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center min-h-[70vh] my-[5vh] bg-cc-cinza py-[4vh] w-full">
                <h2 className="titulo-2">Navege por nossos serviços</h2>
                <ul className="flex w-[60vw] min-w-[280px] flex-wrap justify-center px-[5vw] gap-x-[2%] gap-y-[4vh]">
                    <HomeButton path="/guias/guia/:name" icon={BiSolidBookReader} label="Guia do aplicativo"/>
                    <HomeButton path="/guias/guia/:name" icon={FaLaptopMedical} label="Como será sua consulta"/>
                    <HomeButton path="/informacoes/:id" icon={FaUserDoctor} label="Profissionais da saúde"/>
                    <HomeButton path="/informacoes/:id" icon={MdMedicalInformation} label="Cuidados pós consulta"/>
                    <HomeButton path="/avaliar-teleconsulta" icon={RiSpeakAiFill} label="Como foi a teleconsulta"/>
                    <HomeButton path="/localizar-ubs" icon={BsFillPinMapFill} label="UBS perto de mim"/>
                </ul>
            </section>

            <section className="flex flex-col items-center justify-center my-[5vh] py-[4vh] w-full">
                <h2 className="titulo-2">Conheça nossos parceiros</h2>
                <div>
                    <ul className="[&_img]:h-[10vh]">
                        <li>
                            <a href="https://www.iadb.org/pt-br" target="_blank">
                                <img src={logoBID} alt="Logo do banco interamericano de desenvolvimento"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.bp.org.br/" target="_blank">
                                <img src={logoBP} alt="Logo da beneficiência portuguesa de são paulo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://umane.org.br/" target="_blank">
                                <img src={logoUmane} alt="Logo do grupo umane"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://saude.sp.gov.br/" target="_blank">
                                <img src={logoSSSP} alt="Logo da secretaria de saúde de são paulo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

        /*
        <main>
            <section className="hero">
                <section>
                    <div className="figure"></div>
                    <img src="./assets/images/banner_hero.png"
                        alt="Imagem ilustrativa de atendimento médico atencioso."/>
                    <div className="figure-inversa"></div>
                </section>
                <p>Você não está sozinho, estamos aqui para ajudar.</p>
            </section>
            <form action="#" method="get">
                <label htmlFor="searchBar">
                    <img src="./assets/images/icon_search_bar.png" alt="Ícone de lupa"/>
                    <input type="search" name="search" id="searchBar" placeholder="Buscar..."/>
                </label>
            </form>
            <section className="menu">
                <a href="./pages/guiaHC.html" className="buttonHome">
                    <img src="./assets/images/variant-icon_guia.png" alt="Ícone de guia"/>
                    <p>Guia do aplicativo</p>
                </a>
                <a href="./pages/guiaTeleconsulta.html" className="buttonHome">
                    <img src="./assets/images/icon_teleconsulta.png" alt="Ícone de computador com simbolo de saúde"/>
                    <p>Como será sua consulta</p>
                </a>
                <a href="#" className="buttonHome">
                    <img src="./assets/images/icon_info_medicos.png" alt="Ícone de médico"/>
                    <p>Profissionais da saúde</p>
                </a>
                <a href="#" className="buttonHome">
                    <img src="./assets/images/icon_info_saúde.png" alt="Ícone de estetoscópio"/>
                    <p>Cuidados pós consulta</p>
                </a>
                <a href="#" className="buttonHome">
                    <img src="./assets/images/icon_feedback.png" alt="Ícone de pessoa dando feedback"/>
                    <p>Como foi a teleconsulta</p>
                </a>
                <a href="https://www.hc.fm.usp.br/hc/institucional/unidades" target="_blank" className="buttonHome">
                    <img src="./assets/images/icon_localizacao.png" alt="Ícone de localização"/>
                    <p>UBS perto de mim</p>
                </a>
            </section>
            <section className="parcerias">
                <h2>Conheça nossos parceiros</h2>
                <div className="line"></div>
                <section className="carrosselParcerias">
                    <section className="parceiros">
                        <a href="https://www.iadb.org/pt-br" target="_blank">
                            <img src="./assets/images/logo_parceiro.png"
                                alt="Logo do banco interamericano de desenvolvimento"/>
                        </a>
                        <a href="https://www.bp.org.br/" target="_blank">
                            <img src="./assets/images/logo_parceiro1.png"
                                alt="Logo da beneficiência portuguesa de são paulo"/>
                        </a>
                        <a href="https://umane.org.br/" target="_blank">
                            <img src="./assets/images/logo_parceiro2.png" alt="Logo do grupo umane"/>
                        </a>
                        <a href="https://saude.sp.gov.br/" target="_blank">
                            <img src="./assets/images/logo_parceiro3.png"
                                alt="Logo da secretaria de saúde de são paulo"/>
                        </a>
                    </section>
                    <section aria-hidden className="parceiros">
                        <a href="https://www.iadb.org/pt-br" target="_blank">
                            <img src="./assets/images/logo_parceiro.png"
                                alt="Logo do banco interamericano de desenvolvimento"/>
                        </a>
                        <a href="https://www.bp.org.br/" target="_blank">
                            <img src="./assets/images/logo_parceiro1.png"
                                alt="Logo da beneficiência portuguesa de são paulo"/>
                        </a>
                        <a href="https://umane.org.br/" target="_blank">
                            <img src="./assets/images/logo_parceiro2.png" alt="Logo do grupo umane"/>
                        </a>
                        <a href="https://saude.sp.gov.br/" target="_blank">
                            <img src="./assets/images/logo_parceiro3.png"
                                alt="Logo da secretaria de saúde de são paulo"/>
                        </a>
                    </section>
                </section>
                <div className="line"></div>
            </section>
        </main>
        */
    )
}

export default Home
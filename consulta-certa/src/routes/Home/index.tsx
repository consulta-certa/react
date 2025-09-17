import Titulo from "../../components/Titulo/Titulo"

function Home() {
    return(
        <main>
            <section className="hero">
                <Titulo titulo="Início"/>
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
    )
}

export default Home
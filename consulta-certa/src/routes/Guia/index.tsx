function Guia() {
    return(
        <main>
            <section className="titulo">
                <h1>Guias</h1>
                <p>Com o que podemos te ajudar?</p>
            </section>
            <nav className="categorias">
                <a href="./guiaHC.html">
                    <img src="../assets/images/banner_hero.png" alt="Imagem do Portal do Paciente HC"/>
                    <p>Portal do Paciente</p>
                </a>
                <a href="./guiaTeleconsulta.html">
                    <img src="../assets/images/banner_hero.png" alt="Imagem de um atendimento por teleconsulta"/>
                    <p>Teleconsultas</p>
                </a>
            </nav>
        </main> 
    )
}

export default Guia
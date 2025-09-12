function Guia() {
  return (
    <main>
            <section className="titulo">
                <h1>Guias</h1>
                <p className="subtitulo">Portal do Paciente HC</p>
                <p>Agora escolha o guia que precisar</p>
            </section>
            <nav className="opcoes">
                <a href="./guia1.html">
                    <img src="../assets/images/banner_hero.png" alt="Imagem do Portal do Paciente HC"/>
                    <p>Fazer login/entrada no site</p>
                </a>
                <a href="#">
                    <img src="../assets/images/banner_hero.png" alt="Imagem de um atendimento por teleconsulta"/>
                    <p>Baixar aplicativo Portal do Paciente</p>
                </a>
            </nav>
        </main>
  )
}

export default Guia
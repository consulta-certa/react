function Ajuda() {
    return(
        <main>
            <section className="titulo">
                <h1>Ajuda</h1>
                <p>O que você precisa? Nós te ajudamos</p>
            </section>
            <section id="faqs">
                <div className="faq">
                    <section className="topico">
                        <p>Titulo da tarefa</p>
                        <img src="../assets/images/icon_seta.png" alt="Seta"/>
                    </section>
                    <section className="descricao">
                        <video controls>
                            <source src="../assets/videos/" type="video/mp4"/>
                        </video>
                        <p>Descrição</p>
                    </section>
                </div>
                <li className="faq">
                    <section className="topico">
                        <p>Titulo da tarefa</p>
                        <img src="../assets/images/icon_seta.png" alt="Seta"/>
                    </section>
                    <section className="descricao">
                        <video controls>
                            <source src="../assets/videos/" type="video/mp4"/>
                        </video>
                        <p>Descrição</p>
                    </section>
                </li>
                <li className="faq">
                    <section className="topico">
                        <p>Titulo da tarefa</p>
                        <img src="../assets/images/icon_seta.png" alt="Seta"/>
                    </section>
                    <section className="descricao">
                        <video controls>
                            <source src="../assets/videos/" type="video/mp4"/>
                        </video>
                        <p>Descrição</p>
                    </section>
                </li>
                <li className="faq">
                    <section className="topico">
                        <p>Titulo da tarefa</p>
                        <img src="../assets/images/icon_seta.png" alt="Seta"/>
                    </section>
                    <section className="descricao">
                        <video controls>
                            <source src="../assets/videos/" type="video/mp4"/>
                        </video>
                        <p>Descrição</p>
                    </section>
                </li>
                <li className="faq">
                    <section className="topico">
                        <p>Titulo da tarefa</p>
                        <img src="../assets/images/icon_seta.png" alt="Seta"/>
                    </section>
                    <section className="descricao">
                        <video controls>
                            <source src="../assets/videos/" type="video/mp4"/>
                        </video>
                        <p>Descrição</p>
                    </section>
                </li>
            </section>
            <section className="botaoContato">
                <p>Precisa de algo mais? Entre em contato pelo botão abaixo</p>
                <a href="./contato.html" className="botao">Fale Conosco</a>
            </section>
        </main>
    )
}

export default Ajuda
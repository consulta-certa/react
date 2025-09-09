function Contato() {
    return(
         <main>
            <section className="titulo">
                <h1>Contato</h1>
                <p>Envie uma mensagem para o Hospital das Clínicas</p>
            </section>
            <section id="contato">
                <div>
                    <form action="#" method="get" id="frmContato">
                        <fieldset>
                            <legend>Digite sua informações:</legend>
                            <div>
                                <label htmlFor="idEmail">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" id="nome" placeholder="Digite o seu nome"/>
                            </div>
                            <div>
                                <label htmlFor="idAssunto">Assunto</label>
                                <input type="text" name="assunto" id="assunto" placeholder="Assunto da mensagem"/>
                            </div>
                            <div>
                                <label htmlFor="idConteudo">Conteudo</label>
                                <input type="text" name="contedo" id="conteudo" placeholder="O que você precisa..."/>
                            </div>
                            <div>
                                <button type="submit" id="btnEnciar">ENVIAR</button>
                            </div>    
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contato
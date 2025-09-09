function Avaliacoes() {
    return(
        <main>
            <section className="titulo">
                <h1>Avaliações</h1>
                <p>Envie sua avaliação para o Hospital das Clínicas</p>
            </section>
            <section id="avaliacao">
                <div>
                    <form action="#" method="get" id="frmAvaliacao">
                        <fieldset>
                            <legend>Digite sua informações:</legend>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                            </div>
                            <div>
                                <label htmlFor="idEmail">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="idTelefone">Telefone</label>
                                <input type="tel" name="telefone" id="telefone" placeholder="Telefone"/>
                            </div>
                            <div>
                                <label htmlFor="idConsulta">Consulta</label>
                                <input type="text" name="consulta" id="consulta" placeholder="Consulta"/>
                            </div>
                            <div>
                                <label htmlFor="idDataConsulta">Data da Consulta</label>
                                <input type="date" name="dataConsulta" id="dataConsulta" placeholder="Data da consulta"/>
                            </div>
                            <div>
                                <label htmlFor="idComentario">Comentario</label>
                                <input type="text" name="comentario" id="comentario" placeholder="Algum comentario?"/>
                            </div>
                            <div>
                                <label htmlFor="idAvaliacao">Nota da consulta</label>
                                <input type="number" name="avaliacao" id="avaliacao" min="0" max="10"
                                    placeholder="Nota da consulta"/>
                            </div>
                            <div>
                                <button type="submit" id="btnEnciar">AVALIAR</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Avaliacoes
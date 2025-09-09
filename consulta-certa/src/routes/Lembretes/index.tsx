function Lembretes() {
    return(
        
        <main>
            <section className="titulo">
                <h1>Criar Lembrete</h1>
            </section>
            <form id="formLembretes" action="#">
                <fieldset>
                    <label htmlFor="nome">
                        <img src="../assets/images/icon_nome.png" alt="Ícone de pessoa"/>
                        <input type="text" name="nome" id="nome" placeholder="Nome completo" required/>
                    </label>
                    <label htmlFor="email">
                        <img src="../assets/images/icon_email.png" alt="Ícone de email"/>
                        <input type="email" name="email" id="email" placeholder="Email" required/>
                    </label>
                    <label htmlFor="emailReserva">
                        <img src="../assets/images/icon_email.png" alt="Ícone de email"/>
                        <input type="emailReserva" name="emailReserva" id="emailReserva" placeholder="Mais um email"/>
                    </label>
                    <label htmlFor="telefone">
                        <img src="../assets/images/icon_telefone.png" alt="Ícone de telefone"/>
                        <input type="tel" name="telefone" id="telefone" placeholder="Número de telefone" required/>
                    </label>
                    <label htmlFor="telefoneReserva">
                        <img src="../assets/images/icon_telefone.png" alt="Ícone de telefone"/>
                        <input type="tel" name="telefoneReserva" id="telefoneReserva"
                            placeholder="Mais um número de telefone"/>
                    </label>
                    <label htmlFor="nomeConsulta">
                        <img src="../assets/images/icon_consulta.png" alt="Ícone de primeiros socorros"/>
                        <input type="text" name="nomeConsulta" id="nomeConsulta" placeholder="Consulta" required/>
                    </label>
                    <label htmlFor="dataLembrete">
                        <img src="../assets/images/icon_data.png" alt="Ícone de calendario"/>
                        <input type="date" name="dataLembrete" id="dataLembrete" placeholder="Data da consulta"
                            required/>
                    </label>
                </fieldset>
                <input type="submit" id="criar-lembrete" className="botao" value="Criar Lembrete"/>
            </form>
        </main>
    
    )
}

export default Lembretes
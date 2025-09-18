import { Link, useNavigate } from "react-router-dom"

function Cadastro() {
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate('/perfil', { replace: true })
    }

    return (
        <main>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="idNome">Nome <span className="text-red-500 font-bold">*</span></label>
                            <input type="text" name="nome" id="idNome" required />
                        </div>
                        <div>
                            <label htmlFor="idEmail">Email <span className="text-red-500 font-bold">*</span></label>
                            <input type="email" name="email" id="idEmail" required />
                        </div>
                        <div>
                            <label htmlFor="idEmailConfirmado">Confirmar email <span className="text-red-500 font-bold">*</span></label>
                            <input type="email" name="emailConfirmado" id="idEmailConfirmado" required />
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha <span className="text-red-500 font-bold">*</span></label>
                            <input type="password" name="senha" id="idSenha" required />
                        </div>
                        <div>
                            <label htmlFor="idSenhaConfirmada">Confirmar Senha <span className="text-red-500 font-bold">*</span></label>
                            <input type="password" name="senhaConfirmado" id="idSenhaConfirmada" required />
                        </div>
                        <div>
                            <label htmlFor="idTelefone">Telefone <span className="text-red-500 font-bold">*</span></label>
                            <input type="tel" name="telefone" id="idTelefone" required />
                        </div>
                        <div>
                            <label htmlFor="idAcompanhante">Tem um cuidador ou acompanhante?</label>
                            <input type="checkbox" name="acompanhante" id="idAcompanhante" />
                        </div>
                        <div>
                            <p>Ao criar um perfil você concorda com os <Link to='/termos'>Termos de Uso e Políticas de Privacidade</Link>.</p>
                        </div>
                    </fieldset>
                    <button type="submit">Criar um perfil</button>
                </form>
            </section>
        </main>
    )
}

export default Cadastro
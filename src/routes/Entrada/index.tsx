import { Link, useNavigate } from "react-router-dom"
import Titulo from "../../components/Titulo/Titulo"

function Entrada() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/lembretes', { replace: true })
  }

  return (
    <main>
      <Titulo titulo='Entrar' />
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <div className='input-container'>
                <label htmlFor='idEmail'>
                  Email <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='email' name='email' id='idEmail' />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idSenha'>
                  Senha <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='password' name='senha' id='idSenha' />
              </div>
            </div>
          </fieldset>
          <button type='submit'>Entrar</button>
        </form>
      </section>
      <p className='mb-[2vh]'>
        Não tem um perfil?{' '}
        <Link to='/cadastrar' className='font-bold'>
          Cadastrar
        </Link>
      </p>
    </main>
  )
}

export default Entrada
import { Link, useNavigate } from 'react-router-dom'
import Titulo from '../../components/Titulo/Titulo'

function Cadastro () {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/perfil', { replace: true })
  }

  return (
    <main>
      <Titulo titulo='Criar perfil' />
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <div className='input-container'>
                <label htmlFor='idNome'>
                  Nome <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='text' name='nome' id='idNome' required />
              </div>
              <div className='input-container'>
                <label htmlFor='idTelefone'>
                  Telefone <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='tel' name='telefone' id='idTelefone' required />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idEmail'>
                  Email <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='email' name='email' id='idEmail' required />
              </div>
              <div className='input-container'>
                <label htmlFor='idEmailConfirmado'>
                  Confirmar email{' '}
                  <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='email'
                  name='emailConfirmado'
                  id='idEmailConfirmado'
                  required
                />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idSenha'>
                  Senha <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='password' name='senha' id='idSenha' required />
              </div>
              <div className='input-container'>
                <label htmlFor='idSenhaConfirmada'>
                  Confirmar Senha{' '}
                  <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='password'
                  name='senhaConfirmado'
                  id='idSenhaConfirmada'
                  required
                />
              </div>
            </div>
            <div className='gap-2 pl-[1vw]'>
              <input type='checkbox' name='acompanhante' id='idAcompanhante' />
              <label htmlFor='idAcompanhante'>
                Tem um cuidador ou acompanhante?
              </label>
            </div>
            <div>
              <p className='mx-auto text-sm opacity-75'>
                Ao criar um perfil você concorda com os{' '}
                <Link to='/termos' className='font-bold'>
                  Termos de Uso e Políticas de Privacidade
                </Link>
                .
              </p>
            </div>
          </fieldset>
          <button type='submit'>Criar um perfil</button>
        </form>
      </section>
      <p className='mb-[2vh]'>
        Já tem um perfil?{' '}
        <Link to='/entrar' className='font-bold'>
          Entrar
        </Link>
      </p>
    </main>
  )
}

export default Cadastro

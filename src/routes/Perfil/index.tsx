import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import Titulo from '../../components/Titulo/Titulo'
import Linha from '../../components/Linha/Linha'
import { FaMailBulk } from 'react-icons/fa'

function Perfil () {
  const { paciente, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/entrar', { replace: true })
  }

  useEffect(() => {
    if (!paciente) {
      navigate('/cadastrar', { replace: true })
    }
  }, [navigate, paciente])

  return (
    <main>
      <Titulo titulo='Perfil' />
      <section className='flex max-md:flex-col w-full h-[50vh] justify-center items-center gap-[2vw] max-md:gap-[2vh]'>
        <div className='w-[44%] min-w-[240px]'>
          <h2 className='titulo-2'>Suas informações de perfil</h2>
          <Linha />
          <p>Confira se seus dados de cadastro estão de acordo.</p>
        </div>
        <div className='p-8 bg-cc-cinza rounded-2xl w-[44%] min-w-[240px]'>
          <ul className='flex flex-col gap-[2vh]'>
            <li className='flex gap-2 items-center p-2 rounded-lg bg-white shadow-md'>
							<FaMailBulk className='text-lg'/>
              <span className='text-lg font-bold'>Nome:</span>{' '}
              {paciente && paciente.nome}
            </li>
            <li className='flex gap-2 items-center p-2 rounded-lg bg-white shadow-md'>
							<FaMailBulk className='text-lg'/>
              <span className='text-lg font-bold'>Email:</span>{' '}
              {paciente && paciente.email}
            </li>
            <li className='flex gap-2 items-center p-2 rounded-lg bg-white shadow-md'>
							<FaMailBulk className='text-lg'/>
              <span className='text-lg font-bold'>Telefone:</span>{' '}
              {(paciente && paciente.telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'))}
            </li>
          </ul>
          <button className='botao mx-auto' onClick={handleLogout}>Sair</button>
        </div>
      </section>
    </main>
  )
}

export default Perfil

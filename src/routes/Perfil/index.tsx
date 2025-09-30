import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import Titulo from '../../components/Titulo/Titulo'
import Linha from '../../components/Linha/Linha'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { FaSquarePhone } from 'react-icons/fa6'
import { IoMdExit, IoMdMail } from 'react-icons/io'
import { RiParentFill } from 'react-icons/ri'
const URL_ACOMPANHANTES = import.meta.env.VITE_API_BASE_ACOMPANHANTES;


function Perfil() {
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

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmado, setEmailConfirmado] = useState('')
  const [parentesco, setParentesco] = useState('')
  const [erro, setErro] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErro('')

    if (!nome.trim() || nome.length < 2) {
      setErro('Nome inválido.')
      return
    }

    if (!telefone.trim() || !/^\d{10,11}$/.test(telefone.replace(/\D/g, ''))) {
      setErro('Telefone inválido. Exemplo de telefone correto: 11999999999).')
      return
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErro('Email inválido.')
      return
    }

    if (email !== emailConfirmado) {
      setErro('Os emails precisam ser iguais.')
      return
    }

    if (!parentesco.trim() || parentesco.length < 2) {
      setErro('Parentesco inválido.')
      return
    }

    const acompanhante = { nome, telefone, email, parentesco }

    try {
      const response = await fetch(`${URL_ACOMPANHANTES}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(acompanhante)
      })

      if (!response.ok) throw new Error('Erro ao salvar o acompanhante')
    } catch {
      setErro('Erro ao enviar os dados. Tente novamente mais tarde.')
    }
  }

  return (
    <main>
      <Titulo titulo='Perfil' />
      <section className='flex max-md:flex-col w-full min-h-[50vh] justify-center items-center gap-[2vw] max-md:gap-[2vh]'>
        <div className='w-[44%] max-md:w-[80%] max-sm:w-[100%] min-w-[240px]'>
          <h2 className='titulo-2'>Suas informações de perfil</h2>
          <Linha />
          <p>Deseja registrar seu acompanhante? acesse o botão abaixo</p>
          <button className='botao max-md:mx-auto'>
            <RiParentFill />
            <p>Registrar</p>
          </button>
        </div>
        <div className='p-4 bg-cc-cinza rounded-2xl w-[44%] max-md:w-[80%] max-sm:w-[100%] min-w-[240px]'>
          <ul className='flex flex-col gap-[2vh] w-full'>
            <li className='flex gap-2 items-center p-2 rounded-lg bg-white shadow-md'>
              <BsFillPersonVcardFill className='text-lg' />
              <span className='text-lg font-bold'>Nome:</span>{' '}
              {paciente && paciente.nome}
            </li>
            <li className='flex gap-2 items-center p-2 rounded-lg bg-white shadow-md'>
              <IoMdMail className='text-lg' />
              <span className='text-lg font-bold'>Email:</span>{' '}
              {paciente && paciente.email}
            </li>
            <li className='flex gap-2 items-center p-2 rounded-lg bg-white shadow-md'>
              <FaSquarePhone className='text-lg' />
              <span className='text-lg font-bold'>Telefone:</span>{' '}
              {(paciente && paciente.telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'))}
            </li>
          </ul>
          <button className='botao' onClick={handleLogout}>
            <IoMdExit className='-ml-4' />
            <p>Sair</p>
          </button>
        </div>
      </section>


      <section className='form before-bg'>
        {erro && <p className='form-erro'>{erro}</p>}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <div className='input-container'>
                <label htmlFor='idNome'>
                  Nome <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='text'
                  name='nome'
                  id='idNome'
                  required
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idTelefone'>
                  Telefone <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='tel'
                  name='telefone'
                  id='idTelefone'
                  required
                  onChange={e => setTelefone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className='input-container'>
                <label htmlFor='idEmail'>
                  Email <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  id='idEmail'
                  required
                  onChange={e => setEmail(e.target.value)}
                />
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
                  onChange={e => setEmailConfirmado(e.target.value)}
                />
              </div>
            </div>
            <div className='input-container'>
              <label htmlFor='idParentesco'>
                Parentesco{' '}
                <span className='text-red-500 font-bold'>*</span>
              </label>
              <input
                type='email'
                name='parentesco'
                id='idParentesco'
                required
                onChange={e => setParentesco(e.target.value)}
              />
            </div>
          </fieldset>
          <button type='submit'>Registrar</button>
        </form>
      </section>
    </main>
  )
}

export default Perfil
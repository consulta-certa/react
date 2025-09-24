import Linha from '../../components/Linha/Linha'
import Titulo from '../../components/Titulo/Titulo'
import { MdMail } from 'react-icons/md'
import { FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import type { tipoContato } from '../../types/tipoContato'
import ModalConfirmar from '../../components/ModalConfirmar/ModalConfirmar'
import { useNavigate } from 'react-router-dom'

function Contato () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState('')

  const [contatos, setContatos] = useState<tipoContato[]>([])
  const [indiceAtual, setIndiceAtual] = useState(0)

  useEffect(() => {
    const buscarContatos = async () => {
      try {
        const response = await fetch('http://localhost:3001/contatos')
        const dados = await response.json()
        setContatos(dados)
      } catch {
        console.error('Erro ao buscar contatos')
      }
    }

    buscarContatos()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErro('')

    if (!nome.trim() || nome.length < 2) {
      setErro('Nome inválido.')
      return
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErro('Email inválido.')
      return
    }

    setEnviado(true)
  }

  return (
    <main>
      <Titulo titulo='Contato' />
      <div className='flex max-md:flex-col gap-[5vw] max-md:gap-[2vh] justify-center items-center w-full'>
        <section className='form'>
          {erro && <p className='form-erro'>{erro}</p>}
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className='input-container'>
                <label htmlFor='idNome'>
                  Nome <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='text'
                  id='idNome'
                  name='nome'
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idEmail'>
                  Email <span className='text-red-500 font-bold'>*</span>
                </label>
                <input
                  type='email'
                  id='idEmail'
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='input-container'>
                <label htmlFor='idAssunto'>
                  Assunto <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='text' id='idAssunto' name='assunto' />
              </div>
              <div className='input-container'>
                <label htmlFor='idConteudo'>
                  Do que precisa?{' '}
                  <span className='text-red-500 font-bold'>*</span>
                </label>
                <textarea id='idConteudo' name='conteudo' rows={2}></textarea>
              </div>
            </fieldset>
            <button type='submit'>Enviar</button>
          </form>
        </section>
        <section className='w-[50%] min-w-[280px]'>
          <div className='mb-[2vh]'>
            <h2 className='titulo-2'>Prefere outro jeito?</h2>
            <Linha />
            <p>Veja mais formas de falar com o HC.</p>
          </div>

          {contatos[indiceAtual] && (
            <ul className='flex flex-col gap-[4vh] bg-cc-cinza p-4 rounded-2xl'>
              <li className='flex gap-2 items-center justify-between'>
                <h3 className='text-xl font-bold -mb-[2vh]'>
                  {contatos[indiceAtual].nome}
                </h3>
                <ul className='flex items-center gap-2'>
                  <li>
                    <button
                      onClick={() =>
                        setIndiceAtual(prev => (prev + 1) % contatos.length)
                      }
                      className='flex items-center rounded-4xl gap-2 p-2 sm:py-1 bg-cc-azul text-white text-sm hover:scale-105 hover:bg-cc-azul-escuro'
                    >
                      <FaArrowAltCircleLeft />
                      <p className='inline max-sm:hidden'>Voltar</p>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        setIndiceAtual(
                          prev => (prev - 1 + contatos.length) % contatos.length
                        )
                      }
                      className='flex items-center rounded-4xl gap-2 p-2 sm:py-1 bg-cc-azul text-white text-sm hover:scale-105 hover:bg-cc-azul-escuro'
                    >
                      <FaArrowAltCircleRight />
                      <p className='inline max-sm:hidden'>Avançar</p>
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <div className='flex gap-2 items-center'>
                  <MdMail />
                  <h3 className='text-lg font-semibold'>Email</h3>
                </div>
                <p>{contatos[indiceAtual].email}</p>
              </li>
              <li>
                <div className='flex gap-2 items-center'>
                  <FaSquarePhone />
                  <h3 className='text-lg font-semibold'>Telefone</h3>
                </div>
                <p>{contatos[indiceAtual].telefone}</p>
              </li>
              <li>
                <div className='flex gap-2 items-center'>
                  <FaMapLocationDot />
                  <h3 className='text-lg font-semibold'>Endereço</h3>
                </div>
                <p>
                  {`Rua ${contatos[indiceAtual].rua}, ${contatos[indiceAtual].numero}, ${contatos[indiceAtual].bairro}. ${contatos[indiceAtual].cidade} - SP. ${contatos[indiceAtual].cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')}`}
                </p>
              </li>
            </ul>
          )}
        </section>
      </div>

      <ModalConfirmar
        operacao={() => navigate('/')}
        mensagem='Dúvida enviada ao HC! Acompanhe seu email'
        enviado={enviado}
      />
    </main>
  )
}

export default Contato

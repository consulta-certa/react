import type React from 'react'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Titulo from '../../components/Titulo/Titulo'
import Linha from '../../components/Linha/Linha'

function Avaliacoes () {
  const [enviado, setEnviado] = useState(false)
  const [dataSelecionada, setDataSelecionada] = useState('')
  const [erro, setErro] = useState('')
  const [nota, setNota] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    if (enviado) {
      const timer = setTimeout(() => {
        navigate('/', { replace: true })
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [enviado, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new Date(dataSelecionada)
    const hoje = new Date()
    const limite = new Date()
    limite.setDate(hoje.getDate() - 14)

    if (data < limite) {
      setErro('Avaliação expirada. Selecione uma data válida.')
      return
    }

    setErro('')
    setEnviado(true)
  }

  return (
    <main>
      <Titulo titulo='Avaliação' />
      {enviado ? (
        <section className='my-auto'>
          <h2 className='titulo-2'>Avaliação Enviada!</h2>
          <Linha />
          <p>Estamos te redirecionado para a página inicial.</p>
        </section>
      ) : (
        <section className='form'>
          {erro && <p className='text-red-400'>{erro}</p>}
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <div className='input-container'>
                  <label htmlFor='idNome'>
                    Nome <span className='text-red-500 font-bold'>*</span>{' '}
                  </label>
                  <input type='text' id='idNome' name='nome' required />
                </div>
                <div className='input-container'>
                  <label htmlFor='idEmailTel'>
                    Email ou telefone{' '}
                    <span className='text-red-500 font-bold'>*</span>{' '}
                  </label>
                  <input type='text' id='idEmailTel' name='emailTel' required />
                </div>
              </div>
              <div>
                <div className='input-container'>
                  <label htmlFor='idConsulta'>
                    Qual foi sua teleconsulta?{' '}
                    <span className='text-red-500 font-bold'>*</span>{' '}
                  </label>
                  <select
                    name='consulta'
                    id='idConsulta'
                    defaultValue=''
                    required
                  >
                    <option value='' disabled>
                      Selecione uma opção
                    </option>
                    <option value='fisioterapeuta'>Fisioterapeuta</option>
                    <option value='cardiologista'>Cardiologista</option>
                    <option value='neurologista'>Neurologista</option>
                    <option value='optometrista'>Optometrista</option>
                    <option value='ortopedista'>Ortopedista</option>
                  </select>
                </div>
                <div className='input-container'>
                  <label htmlFor='idDataConsulta'>
                    Quando foi sua teleconsulta?{' '}
                    <span className='text-red-500 font-bold'>*</span>{' '}
                  </label>
                  <input
                    type='datetime-local'
                    id='idDataConsulta'
                    name='dataConsulta'
                    required
                    onChange={e => setDataSelecionada(e.target.value)}
                  />
                </div>
              </div>
              <div className='input-container'>
                <label htmlFor='idNota'>
                  Deixe a nota aqui{' '}
                  <span className='text-red-500 font-bold'>*</span>{' '}
                </label>
                <div className='flex items-center justify-evenly w-[50%]'>
                  {[1, 2, 3, 4, 5].map(estrela => (
                    <label key={estrela} className='cursor-pointer'>
                      <input
                        type='radio'
                        name='rating'
                        value={estrela}
                        className='sr-only peer'
                        onChange={() => setNota(estrela)}
                      />
                      <FaStar
                        className={`text-4xl transition-all ease-in duration-200 ${
                          estrela <= nota
                            ? 'text-cc-azul scale-125'
                            : 'text-gray-300'
                        }`}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div className='input-container'>
                <label htmlFor='idComentario'>
                  Algum comentário sobre sua teleconsulta?
                </label>
                <textarea id='idComentario' name='comentario' rows={2} />
              </div>
            </fieldset>
            <button type='submit'>Enviar avaliação</button>
          </form>
        </section>
      )}
    </main>
  )
}

export default Avaliacoes

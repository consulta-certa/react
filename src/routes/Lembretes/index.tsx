import type React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import ItemLembrete from '../../components/ItemLembrete/ItemLembrete'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import ModalConfirmar from '../../components/ModalConfirmar/ModalConfirmar'
import { formatarData } from '../../utils/formatarData'

function Lembretes () {
  const navigate = useNavigate()
  const { paciente } = useAuth()

  useEffect(() => {
    if (!paciente) {
      navigate('/cadastrar', { replace: true })
    }
  }, [paciente, navigate])

  const [dataSelecionada, setDataSelecionada] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [erro, setErro] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErro('')
    setEnviado(false)

    if (!especialidade || !dataSelecionada) {
      setErro('Preencha todos os campos obrigatórios.')
      return
    }

    const data = new Date(dataSelecionada)
    const hoje = new Date()
    const limite = new Date()
    limite.setDate(hoje.getDate() - 14)

    if (data < limite) {
      setErro('Avaliação expirada. Selecione uma data válida.')
      return
    }

    try {
      const consultaPayload = {
        especialidade,
        data_consulta: formatarData(dataSelecionada),
        status: true,
        id_paciente: paciente!.id_paciente
      }

      const consultaRes = await fetch('http://localhost:3001/consultas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(consultaPayload)
      })

      if (!consultaRes.ok) throw new Error('Erro ao registrar consulta.')

      const consultaCriada = await consultaRes.json()

      
      const jsonPayload = {
        nome: paciente!.nome,
        email: paciente!.email,
        telefone: paciente!.telefone,
        especialidade: consultaCriada.especialidade,
        data_consulta: consultaCriada.data_consulta
      }

      console.log(jsonPayload)

      const lembreteRes = await fetch('http://localhost:5000/api/set-reminder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonPayload)
      })

      if (!lembreteRes.ok) throw new Error('Erro ao enviar lembrete.')

      setEnviado(true)
    } catch (err) {
      setErro('Erro ao processar o lembrete. Tente novamente.')
    }
  }

  return (
    <main>
      <Titulo titulo='Lembrete' />
      <div className='flex max-md:flex-col max-md:gap-[4vh] gap-[2vw] justify-center items-center w-full'>
        <section className='w-[50%] max-md:w-full'>
          <h2 className='titulo-2'>Seus lembretes</h2>
          <ul className='flex flex-col gap-[2vh] w-full mt-[4vh] h-[40vh] pr-[2vw] overflow-scroll'>
            <ItemLembrete especialidade='Cardiologista' horario='01/01/2025 23:59' canal='email' />
            <ItemLembrete especialidade='Neurologista' horario='02/01/2025 10:00' canal='sms' />
          </ul>
        </section>
        <section className='w-[32%] max-md:w-full'>
          <h2 className='titulo-2'>Criar novo lembrete?</h2>
          <section className='form'>
            {erro && <p className='text-red-400'>{erro}</p>}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <div className='input-container'>
                  <label htmlFor='idConsulta'>
                    Qual é sua teleconsulta? <span className='text-red-500 font-bold'>*</span>
                  </label>
                  <select
                    name='consulta'
                    id='idConsulta'
                    value={especialidade}
                    onChange={e => setEspecialidade(e.target.value)}
                    required
                  >
                    <option value='' disabled>Selecione uma opção</option>
                    <option value='fisioterapeuta'>Fisioterapeuta</option>
                    <option value='cardiologista'>Cardiologista</option>
                    <option value='neurologista'>Neurologista</option>
                    <option value='optometrista'>Optometrista</option>
                    <option value='ortopedista'>Ortopedista</option>
                  </select>
                </div>
                <div className='input-container'>
                  <label htmlFor='idDataConsulta'>
                    Quando será sua teleconsulta? <span className='text-red-500 font-bold'>*</span>
                  </label>
                  <input
                    type='datetime-local'
                    id='idDataConsulta'
                    name='dataConsulta'
                    value={dataSelecionada}
                    onChange={e => setDataSelecionada(e.target.value)}
                    required
                  />
                </div>
              </fieldset>
              <button type='submit'>Registrar</button>
            </form>
          </section>
        </section>
      </div>

      <ModalConfirmar operacao={()=>navigate('/')} mensagem='Lembrete Registrado! Ele será enviado por email' enviado={enviado}/>
    </main>
  )
}

export default Lembretes
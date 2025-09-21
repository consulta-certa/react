import type React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import { useState } from 'react'
import ItemLembrete from '../../components/ItemLembrete/ItemLembrete'

function Lembretes () {
  const [dataSelecionada, setDataSelecionada] = useState('')
  const [erro, setErro] = useState('')

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
  }

  return (
    <main>
      <Titulo titulo='Lembrete' />
      <div className='flex max-md:flex-col max-md:gap-[4vh] gap-[2vw] justify-center items-center w-full'>
        <section className='w-[50%] max-md:w-full'>
          <h2 className='titulo-2'>Seus lembretes</h2>
          <ul className='flex flex-col gap-[2vh] w-full mt-[4vh] h-[40vh] pr-[2vw] overflow-scroll'>
            <ItemLembrete especialidade='especialidade' horario='01/01/2025 23:59' canal='email'/>
            <ItemLembrete especialidade='especialidade' horario='01/01/2025 23:59' canal='email'/>
            <ItemLembrete especialidade='especialidade' horario='01/01/2025 23:59' canal='email'/>
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
                    Qual é sua teleconsulta?{' '}
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
                    Quando será sua teleconsulta?{' '}
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
                <div className='input-container'>
                  <label htmlFor='idCanalEnvio'>
                    Por onde quer que receber o lembrete?{' '}
                    <span className='text-red-500 font-bold'>*</span>{' '}
                  </label>
                  <select
                    name='canalEnvio'
                    id='idCanalEnvio'
                    defaultValue=''
                    required
                  >
                    <option value='' disabled>
                      Selecione uma opção
                    </option>
                    <option value='fisioterapeuta'>Email</option>
                    <option value='cardiologista'>SMS (Telefone)</option>
                    <option value='neurologista'>Telegram</option>
                  </select>
                </div>
              </fieldset>
              <button type='button'>Registrar</button>
            </form>
          </section>
        </section>
      </div>
    </main>

    /*
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
        */
  )
}

export default Lembretes

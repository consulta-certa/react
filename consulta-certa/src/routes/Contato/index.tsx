import Linha from '../../components/Linha/Linha'
import Titulo from '../../components/Titulo/Titulo'
import { MdMail } from 'react-icons/md'
import { FaMapLocationDot, FaSquarePhone } from 'react-icons/fa6'

function Contato () {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  
  return (
    <main>
      <Titulo titulo='Contato' />
      <div className='flex max-md:flex-col gap-[5vw] max-md:gap-[2vh] justify-center items-center w-full'>
        <section className='form'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className='input-container'>
                <label htmlFor='idNome'>
                  Nome <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='text' id='idNome' name='nome' />
              </div>
              <div className='input-container'>
                <label htmlFor='idEmail'>
                  Email <span className='text-red-500 font-bold'>*</span>
                </label>
                <input type='email' id='idEmail' name='email' />
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
          <ul className='flex flex-col gap-[4vh] bg-cc-cinza p-4 rounded-2xl'>
            <li>
              <div className='flex gap-2 items-center'>
                <MdMail />
                <h3 className='text-lg font-semibold'>Email</h3>
              </div>
              <p>e@mail.com</p>
            </li>
            <li>
              <div className='flex gap-2 items-center'>
                <FaSquarePhone />
                <h3 className='text-lg font-semibold'>Telefone</h3>
              </div>
              <p>(11) 1234-5678</p>
            </li>
            <li>
              <div className='flex gap-2 items-center'>
                <FaMapLocationDot />
                <h3 className='text-lg font-semibold'>Endereço</h3>
              </div>
              <p>
                {'1234'} Rua {'rua'}, {'bairro'}. {'Cidade'} - SP
              </p>
            </li>
          </ul>
        </section>
      </div>
    </main>

    /*
        <main>
            <section className="titulo">
                <h1>Contato</h1>
                <p>Envie uma mensagem para o Hospital das Clínicas</p>
            </section>
            <section id="contato">
                <div>
                    <form action="#" method="get" id="frmContato">
                        <fieldset>
                            <legend>Digite sua informações:</legend>
                            <div>
                                <label htmlFor="idEmail">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" id="nome" placeholder="Digite o seu nome"/>
                            </div>
                            <div>
                                <label htmlFor="idAssunto">Assunto</label>
                                <input type="text" name="assunto" id="assunto" placeholder="Assunto da mensagem"/>
                            </div>
                            <div>
                                <label htmlFor="idConteudo">Conteudo</label>
                                <input type="text" name="contedo" id="conteudo" placeholder="O que você precisa..."/>
                            </div>
                            <div>
                                <button type="submit" id="btnEnciar">ENVIAR</button>
                            </div>    
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
*/
  )
}

export default Contato

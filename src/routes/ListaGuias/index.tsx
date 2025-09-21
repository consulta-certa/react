import ItemLista from '../../components/ItemLista/ItemLista'
import Titulo from '../../components/Titulo/Titulo'
import imageTest from '../../assets/images/carrossel-template2.png'
import { useEffect, useState } from 'react'
import type { tipoConteudo } from '../../types/tipoConteudo'
import { converterPath } from '../../utils/converterPath'

function ListaGuias () {
  const [categoria, setCategoria] = useState(0)
  const [guiasPortal, setGuiasPortal] = useState<tipoConteudo[]>([])
  const [guiasTeleconsulta, setGuiasTeleconsulta] = useState<tipoConteudo[]>([])

  const fetchGuias = async () => {
    try {
      const response = await fetch('http://localhost:3001/conteudos')
      const data = await response.json()

      const guiasPortalSelecionados = data.filter(
        (conteudo: tipoConteudo) => conteudo.tipo === 'gp'
      )
      setGuiasPortal(guiasPortalSelecionados)

      const guiasTeleconsultaSelecionados = data.filter(
        (conteudo: tipoConteudo) => conteudo.tipo === 'gt'
      )
      setGuiasTeleconsulta(guiasTeleconsultaSelecionados)
    } catch (erro) {
      console.error('Erro ao buscar os dados dos guias:', erro)
    }
  }

  useEffect(() => {
    fetchGuias()
  }, [])

  return (
    <main>
      <Titulo titulo='Guias'></Titulo>
      <h2 className='titulo-2'>Qual tipo de ajuda você gostaria?</h2>

      <section className='flex max-md:flex-col justify-between min-w-[280px] px-[1vw] mt-[2vh]'>
        <div className='flex items-center flex-col gap-[2vh]'>
          <button
            className={`text-xl max-md:text-md font-semibold text-center w-full p-4 rounded-l-xl hover:translate-x-4 transition-all ease-in duration-200 ${
              categoria == 1 ? 'bg-cc-cinza' : 'bg-cc-azul'
            }`}
            onClick={() => setCategoria(0)}
          >
            Portal do Paciente HC
          </button>
          <button
            className={`text-xl max-md:text-md font-semibold text-center w-full p-4 rounded-l-xl hover:translate-x-4 transition-all ease-in duration-200 ${
              categoria == 0 ? 'bg-cc-cinza' : 'bg-cc-azul'
            }`}
            onClick={() => setCategoria(1)}
          >
            Teleconsulta
          </button>
        </div>
        <ul className='flex flex-col items-center bg-cc-azul px-8 h-[44vh] py-4 overflow-y-scroll gap-[2vh]'>
          {(categoria == 0 ? guiasPortal : guiasTeleconsulta).map(guia => (
            <ItemLista
              path={converterPath(guia.titulo)}
              titulo={guia.titulo}
              image={imageTest}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default ListaGuias

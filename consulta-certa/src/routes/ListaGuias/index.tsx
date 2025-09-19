import ItemLista from "../../components/ItemLista/ItemLista"
import Titulo from "../../components/Titulo/Titulo"
import imageTest from '../../assets/images/carrossel-template2.png'

function ListaGuias() {
    return (
        <main>
            <Titulo titulo="Guias"></Titulo>
            <h2 className="titulo-2">Qual tipo de ajuda você gostaria?</h2>

            <section className="flex max-md:flex-col justify-between min-w-[280px] px-[1vw]">
                <div className="flex items-center flex-col gap-[2vh]">
                    <button className="text-xl max-md:text-md font-semibold text-center w-full p-4 rounded-l-xl bg-cc-cinza hover:translate-x-4 transition-all ease-in duration-200">
                        <img src={imageTest} alt="" className="h-[6vh] w-full object-cover"/>
                        Portal do Paciente HC
                    </button>
                    <button className="text-xl max-md:text-md font-semibold text-center w-full p-4 rounded-l-xl bg-cc-cinza hover:translate-x-4 transition-all ease-in duration-200">
                        <img src={imageTest} alt="" className="h-[6vh] w-full object-cover"/>
                        Teleconsulta
                    </button>
                </div>
                <ul className="flex flex-col items-center bg-cc-cinza px-8 h-[44vh] py-4 overflow-y-scroll gap-[2vh]">
                    <ItemLista
                        path="como-mudar-a-senha-no-portal-do-paciente-hc"
                        titulo="Como mudar a senha no Portal do Paciente HC"
                        image={imageTest}
                    />
                </ul>
            </section>
        </main>
    )
}

export default ListaGuias
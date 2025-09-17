function Titulo(props:{titulo:string}) {
  return (
    <div className="flex items-center w-[80vw] h-[20vh] rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-300 to-cyan-100">
        <h1 className="text-5xl font-black ml-[2vw]">{props.titulo}</h1>
        <div className="w-1 h-[30%] bg-cc-preto rounded-4xl mx-[1vw]"></div>
        <p> { window.location.href.slice(4).split(/[/|:]/).join(' > ') } </p>
    </div>
  )
}

export default Titulo
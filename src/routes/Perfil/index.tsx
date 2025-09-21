import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
    const navigate = useNavigate();

    useEffect(()=> {
        navigate('/cadastrar', { replace: true })
    }, [])

    return(
        <main>
            <section className="titulo">
                <h1>Perfil</h1>
                <p>Aqui estão seus dados para lembrete</p>
            </section>
            <section className="containerDadosPerfil">
                <section>
                    <h3>Dados usuário</h3>
                    <img src="../assets/images/icon_lapis.png" alt="Ícone de lápis" className="icon"/>
                </section>
                <ul id="dadosUsuario">
                    <li className="campoPerfil1">
                        <p>Nome Completo</p>
                    </li>
                    <li className="campoPerfil2">
                        <p>email@email.com</p>
                    </li>
                    <li className="campoPerfil3">
                        <p>11 91234 - 5678</p>
                    </li>
                </ul>
            </section>
            <section className="containerDadosPerfil">
                <section>
                    <h3>Endereço</h3>
                    <img src="../assets/images/icon_lapis.png" alt="Ícone de lápis" className="icon"/>
                </section>
                <ul id="dadosEndereco">
                    <li className="campoEndereco1">
                        <p>Rua do Logradouro</p>
                    </li>
                    <li className="campoEndereco2">
                        <p>123</p>
                    </li>
                    <li className="campoEndereco3">
                        <p>01.234-567</p>
                    </li>
                    <li className="campoEndereco4">
                        <p>Jardim Bairros</p>
                    </li>
                    <li className="campoEndereco5">
                        <p>Distrito Cidade</p>
                    </li>
                    <li className="campoEndereco6">
                        <p>São Paulo</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Perfil
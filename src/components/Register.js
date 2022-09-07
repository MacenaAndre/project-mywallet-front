import { Link, useNavigate } from "react-router-dom";
import { WrapperFormRegister } from "./styled-components"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"; 

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [button, setButton] = useState(false);
    const navigate = useNavigate();

    function RegisterConnection () {

    }
    return (
        <WrapperFormRegister>
            <h1>MyWallet</h1>
            <form onSubmit={RegisterConnection}>
                <input
                     placeholder="Nome"
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                     disabled={button}
                     required
                     ></input>
                <input
                     placeholder="E-mail"
                     type="email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     disabled={button}
                     required
                     ></input>
                <input
                     placeholder="Senha"
                     type="password"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     disabled={button}
                     required
                     ></input>
                <input
                     placeholder="Confirme a senha"
                     type="password"
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     value={confirmPassword}
                     disabled={button}
                     required
                     ></input>
                {!button ? <button>Cadastrar</button> : <button disabled={button}><ThreeDots color="#FFFFFF" width={60} height={60}/></button> }
            </form>
            <Link to="/">Já tem uma conta? Entre Agora!</Link>
        </WrapperFormRegister>
    );
}
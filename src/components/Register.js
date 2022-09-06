import { Link, useNavigate } from "react-router-dom";
import { WrapperForm } from "./styled-components"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"; 

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [button, setButton] = useState(false);
    const navigate = useNavigate();

    function RegisterConnection () {

    }
    return (
        <WrapperForm>
            <h1>MyWallet</h1>
            <form onSubmit={RegisterConnection}>
                <input
                     placeholder="email"
                     type="email"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                     disabled={button}
                     required
                     ></input>
                <input
                     placeholder="senha"
                     type="password"
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}
                     disabled={button}
                     required
                     ></input>
                <input
                     placeholder="nome"
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                     disabled={button}
                     required
                     ></input>
                <input
                     placeholder="foto"
                     type="url"
                     onChange={(e) => setUrl(e.target.value)}
                     value={url}
                     disabled={button}
                     required
                     ></input>
                {!button ? <button>Cadastrar</button> : <button disabled={button}><ThreeDots color="#FFFFFF" width={60} height={60}/></button> }
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </WrapperForm>
    );
}
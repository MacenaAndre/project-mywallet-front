import { Link, useNavigate } from "react-router-dom";
import { WrapperFormRegister } from "./styled-components"
import { useState } from "react";
import spinner from "../assets/img/spinner.gif"; 
import { registerApi } from "../service/myWalletService";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [button, setButton] = useState(false);
    const navigate = useNavigate();

    function RegisterConnection (e) {
        e.preventDefault();

        const body = {
            name,
            email,
            password,
            confirm_password: confirmPassword
        };

        registerApi(body).then(() => {
            navigate("/");
        }).catch((res) => {
            setButton(false);
            alert(res.response.data.message?.replace("[ref:password]", "equal to password"));
        });

        setButton(true);

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
                {!button ? <button>Entrar</button> : <button disabled={button}><img src={spinner} alt="spinner"></img></button> }
            </form>
            <Link to="/">Já tem uma conta? Entre Agora!</Link>
        </WrapperFormRegister>
    );
}
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import { WrapperFormLogin } from "./styled-components"
import { ThreeDots } from "react-loader-spinner";

export default function Login () {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [buttonLogin, setButtonLogin] = useState(false);
    const {setLogin} = useContext(AppContext);
    const navigate = useNavigate();

    function LoginConecction () {

    };

    return (
        <>
            <WrapperFormLogin>
                <h1>MyWallet</h1>
                <form onSubmit={LoginConecction}>
                    <input
                        placeholder="E-mail"
                        type="email"
                        onChange={(e) => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        disabled={buttonLogin}
                        required
                        ></input>
                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={(e) => setPasswordLogin(e.target.value)}
                        value={passwordLogin}
                        disabled={buttonLogin}
                        required
                        ></input>
                    {!buttonLogin ? <button>Entrar</button> : <button disabled={buttonLogin}><ThreeDots color="#FFFFFF" width={60} height={60}/></button> }
                </form>
                <Link to="/register">Primeira Vez? Cadastre-se!</Link>
            </WrapperFormLogin>
        </>
    );
}
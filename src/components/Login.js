import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import { WrapperFormLogin } from "./styled-components"
import { logInApi } from "../service/myWalletService";
import spinner from "../assets/img/spinner.gif";

export default function Login () {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [buttonLogin, setButtonLogin] = useState(false);
    const {setLogin} = useContext(AppContext);
    const navigate = useNavigate();

    function LoginConecction (e) {
        e.preventDefault();

        const body = {
            email: emailLogin,
            password: passwordLogin
        };

        logInApi(body).then((res) => {
            localStorage.setItem("myWallet", JSON.stringify({token: res.data.token}));
            navigate("/history");
        }).catch((res) => {
            setButtonLogin(false);
            alert(res.response.data.message);
        });

        setButtonLogin(true);
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
                    {!buttonLogin ? <button>Entrar</button> : <button disabled={buttonLogin}><img src={spinner} alt="spinner"></img></button> }
                </form>
                <Link to="/register">Primeira Vez? Cadastre-se!</Link>
            </WrapperFormLogin>
        </>
    );
}
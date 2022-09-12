import styled from "styled-components";

function WrapperFormLogin ({ children }) {
    return (
        <Login>
            <Wrapper>
                {children}
            </Wrapper>
        </Login>
    );
};

function WrapperFormRegister ({ children }) {
    return (
        <Register>
            <Wrapper>
                {children}
            </Wrapper>
        </Register>
    );
};

function WrapperFormEntry ({children}) {
    return (
        <Entry>
            <Wrapper>
                {children}
            </Wrapper>
        </Entry>
    );
}

const Login = styled.div`
    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background-color: #8C11BE;
        padding-top: 185px;
    }
`;

const Register = styled.div`
    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
        background-color: #8C11BE;
    }
`;

const Entry = styled.div`
    & div {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        background-color: #8C11BE;
    }
`

const Wrapper = styled.div`

    &  h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 45px;
        font-weight: 400;
        line-height: 50px;
        color: #FFFFFF;
    }
    
    input {
        height: 58px;
        width: 326px;
        border-radius: 5px;
        background-color: #FFFFFF;
        border: none;
        padding-left: 20px;
        margin: 5px 0px;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        color: #000000;
    }
    input::placeholder {
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        color: #000000;
    }
    input:disabled {
        background-color: #F2F2F2;
        color: #AFAFAF;
    }
    button {
        height: 46px;
        width: 326px;
        border-radius: 5px;
        background-color: #A328D6;
        box-shadow: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 5px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        

    }
    button:disabled {
        opacity: 0.7;
    }
    a {
        text-decoration: none;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;

    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 28px;
        width: 100%;
        height: auto;
    }
`;

export {WrapperFormLogin, WrapperFormRegister, WrapperFormEntry}
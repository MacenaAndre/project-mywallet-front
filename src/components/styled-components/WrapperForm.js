import styled from "styled-components";

export default function WrapperForm ({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #8C11BE;

    &  h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        color: #FFFFFF;
        margin-top: 185px;
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
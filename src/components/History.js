import styled from "styled-components"
import LogoutIcon from "../assets/img/Logout.png"
import AddIcon from "../assets/img/add.png"
import MinusIcon from "../assets/img/remove.png"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "./styled-components"
import AppContext from "./contexts/AppContext"
import { logOutApi, readDataApi } from "../service/myWalletService"
import Entry from "./Entry"

export default function History () {
    const {setIsIncome, refresh} = useContext(AppContext);
    const [name, setName] = useState("");
    const [userHistory, setUserHistory] = useState("");
    const navigate = useNavigate();

    function getTotal() {
        
        let total = 0;

        if(userHistory.length > 0) {
            userHistory.forEach((value) => {
                if(value.isIncome) {
                    total = total + (value.value * 100)
                } else {
                    total = total - (value.value * 100)
                }
            });
            let result = (total/100);
            return result;
        };
        return; 
    };

    function logOut() {
        const confirm = window.confirm("Você tem certeza que deseja sair?");

        if(confirm) {
            logOutApi()
                .then(() => {
                    navigate("/");
                })
                .catch((res) => {
                    alert(res.response.data.message);
                })
        };
    };

    useEffect(() => {
        readDataApi()
            .then((res) => {
                setName(res.data.name);
                setUserHistory(res.data.history);
            })
            .catch(() => {
                localStorage.clear("mwWallet");
                navigate("/")
            })
    }, [navigate, refresh]);

    return (
        <WrapperHistory>
            <Header>
                <h2>Olá, {name}</h2>
                <img src={LogoutIcon} alt="Logout" title="Log Out" onClick={() => logOut()}/>
            </Header>
            
                {userHistory.length < 1 ? 
                    <Content><h1>Não há registros de entradas ou saídas</h1></Content>
                : 
                    <ContentFilled>
                        {userHistory.map((value, index) => (
                        <Entry
                            key={index}
                            id={value._id}
                            date={value.date}
                            description={value.description}
                            value={value.value}
                            isIncome={value.isIncome}
                        />
                    ))}
                        <Total><h3>SALDO</h3> {Number(getTotal()) > 0 ? <h4>{getTotal()}</h4> : <h5>{getTotal()}</h5>}</Total>
                    </ContentFilled>
                    
                
                }
            
            <Buttons>
                <div onClick={() => {
                    setIsIncome(true);
                    navigate("/input");
                }}>
                    <img src={AddIcon} alt="Add-Icon"/>
                    <h3>Nova entrada</h3>
                </div>
                <div onClick={() => {
                    setIsIncome(false);
                    navigate("/input");
                }}>
                    <img src={MinusIcon} alt="Minus-Icon"/>
                    <h3>Nova saída</h3>
                </div>
            </Buttons>
        </WrapperHistory>
    )
}

const WrapperHistory = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #8C11BE;
    padding: 25px 24px;
`;

const Content = styled.div`
    width: 100%;
    height: 66vh;
    border-radius: 5px;
    margin-top: 22px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        max-width: 60%;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`;

const Buttons =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20vh;

    & div {
        height: 114px;
        width: 48%;
        border-radius: 5px;
        margin-top: 13px;
        background-color: #A328D6;
        cursor: pointer;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    img {
        width: 30px;
        height: 30px;
    }
    h3{
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        color: #FFFFFF;
    }
`
const ContentFilled = styled.div`
    width: 100%;
    height: 66vh;
    padding: 12px;
    border-radius: 5px;
    margin-top: 22px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: relative;
`
const Total = styled.div`
    position: absolute;
    bottom: 12px;
    left: 12px;
    width: 92%;
    display: flex;
    justify-content: space-between;
    
    & h3 {
        font-weight: 700;
    }
    h4 {
        color: #03AC00;
    }
    h5 {
        color: #C70000;
    }
`;
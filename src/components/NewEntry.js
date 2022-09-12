import { useContext, useState } from "react";
import spinner from "../assets/img/spinner.gif"; 
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { newEntryApi } from "../service/myWalletService";
import AppContext from "./contexts/AppContext";
import { WrapperFormEntry, Header } from "./styled-components";

export default function NewEntry () {
    const { isIncome, setRefresh, refresh } = useContext(AppContext);
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("")
    const [buttonEntry, setButtonEntry] = useState("");
    const navigate = useNavigate();
    let entryText = "";

    if(isIncome) {
        entryText = "entrada";
    } else {
        entryText = "saída";
    }

    function EntryPost (e) {
        e.preventDefault();

        const numbValue = Number(value?.split(",").join(".")).toFixed(2);

        if(isNaN(numbValue)) alert("Por favor insira um numero com até duas casas decimais!");

        const body = {
            value: numbValue * 100,
            description,
            isIncome
        };

        newEntryApi(body)
            .then(() => {
                setRefresh(!refresh);
                navigate("/history")
            })
            .catch((res) => {
                alert(res.response.data.message);
                setButtonEntry(false);
            });

        setButtonEntry(true)
    };

    return (
        <>
            <WrapperFormEntry>
                <Adjust>
                    <Header> 
                            <h2>Nova {entryText}</h2>
                            <h4 onClick={() => navigate("/history")}>x</h4>
                    </Header>
                </Adjust>
                <form onSubmit={EntryPost}>
                    <input
                        placeholder="Valor"
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        disabled={buttonEntry}
                        required
                        ></input>
                    <input
                        placeholder="Descrição"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        disabled={buttonEntry}
                        required
                        ></input>
                    {!buttonEntry ? <button>Salvar {entryText}</button> : <button disabled={buttonEntry}><img src={spinner} alt="spinner"></img></button> }
                </form>
            </WrapperFormEntry>
        </>
        
    );
}

const Adjust = styled.span`
    padding: 25px 24px;
`
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AppContext from "./contexts/AppContext";
import { WrapperFormEntry, Header } from "./styled-components";

export default function NewEntry () {
    const { isIncome } = useContext(AppContext);
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

    function EntryConecction () {
    
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
                <form onSubmit={EntryConecction}>
                    <input
                        placeholder="Valor"
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        disabled={buttonEntry}
                        required
                        ></input>
                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        disabled={buttonEntry}
                        required
                        ></input>
                    {!buttonEntry ? <button>Salvar {entryText}</button> : <button disabled={buttonEntry}><ThreeDots color="#FFFFFF" width={60} height={60}/></button> }
                </form>
            </WrapperFormEntry>
        </>
        
    );
}

const Adjust = styled.span`
    padding: 25px 24px;
`
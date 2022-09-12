import { useContext } from "react";
import styled from "styled-components";
import { deleteEntryApi } from "../service/myWalletService";
import AppContext from "./contexts/AppContext";

export default function Entry ({id, date, description, value, isIncome}) {
    const {refresh, setRefresh} = useContext(AppContext);

    function deleteEntry() {

        const confirm = window.confirm("Tem certeza que deseja excluir essa transação?");

        if(!confirm) return;

        deleteEntryApi(id)
            .then(() => {
                setRefresh(!refresh);
            })
            .catch((res) => {
                alert(res.response.data.message);
            })
    }

    return (
        <>
            <WrapperEntry>
                <h1><Date>{date} </Date> {description}</h1> 
                <h1>
                    {isIncome ? <Income>{value}</Income> : <Expent>{value}</Expent>}
                    <Delete onClick={() => deleteEntry()}>x</Delete>
                </h1>
                
            </WrapperEntry>
        </>
    );
}

const WrapperEntry = styled.div`
    display: flex;
    justify-content: space-between;

    & h1 {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }
`
const Date = styled.span`
    color: #C6C6C6;
`
const Income = styled.span`
    color: #03AC00;
`
const Expent = styled.span`
    color: #C70000;
`
const Delete = styled.span`
    color: #C6C6C6;
    cursor: pointer;
`
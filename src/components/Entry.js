import styled from "styled-components";

export default function Entry ({date, description, value, isIncome}) {
    return (
        <>
            <WrapperEntry>
                <h1><Date>{date} </Date> {description}</h1> 
                {isIncome ? <h1><Income>{value}</Income></h1> : <Expent>{value}</Expent>}
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
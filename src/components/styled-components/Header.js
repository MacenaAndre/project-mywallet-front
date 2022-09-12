import styled from "styled-components";

function Header ({children}) {
    return (
        <WrapperHeader>
            {children}
        </WrapperHeader>
    );
};

const WrapperHeader =  styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #8C11BE;

    & h2 {
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        color: #FFFFFF;
    }
    h4 {
        font-size: 23px;
        font-weight: 700;
        line-height: 31px;
        color: #FFFFFF;
        cursor: pointer;
    }
    img {
        cursor: pointer;
    }
`;

export { Header };
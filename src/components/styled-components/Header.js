import styled from "styled-components";

function Header ({children}) {
    return (
        <WrapperHeader>
            {children}
        </WrapperHeader>
    );
};

const WrapperHeader =  styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & h2 {
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        color: #FFFFFF;
    }
    img {
        cursor: pointer;
    }
`;

export { Header };
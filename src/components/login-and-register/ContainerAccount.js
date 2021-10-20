import styled from "styled-components"

const ContainerAccount = styled.div`
    background-color: #8C11BE;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }

`;
const Logo = styled.h1 `
    color: white;
    font-size: 32px;
    margin-bottom: 26px;
`;

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    input {
        font-family: Raleway, monospace;
        height: 58px;
        width: 90vw;
        border-radius: 5px;
        border: none;
        padding-left: 15px;
        color: black;
        font-size: 20px;
        margin-bottom: 13px;
        &::placeholder {
            color: black;
            font-size: 20px;
        }
    }

    button {
        height: 46px;
        background-color: #A328D6;
        color: white;
        font-weight: bold;
        font-size: 20px;
        border: none;
        border-radius: 5px;
    }
`;

const P = styled.p `
    color: white;
    font-size: 15px;
    margin-top: 36px;
    font-weight: bold;
`;

export {
    ContainerAccount,
    Logo,
    Form,
    P,
}
import styled from "styled-components";

const Input = styled.input `
    font-family: Raleway, monospace;
    height: 58px;
    width: 87vw;
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
`;
const Button = styled.button `
    height: 46px;
    background-color: ${props => props.disabled ? '#6c0996' : '#A328D6'};
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    .button-loading {
        padding-bottom: 30px;
    }
`;
const Error = styled.span `
    color: red;
    margin-top: 10px;
    font-size: 14px;
`;
export {
    Input,
    Button,
    Error
}
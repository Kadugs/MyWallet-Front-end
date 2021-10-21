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
    background-color: #A328D6;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 5px;
`
export {
    Input,
    Button,
}
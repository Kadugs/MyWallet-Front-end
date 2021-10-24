import styled from "styled-components"

const Container = styled.div `
    width: 87vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const Top = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;    
    margin-top: 25px;
    margin-bottom: 22px;
`;

const Header = styled.p `
    font-size: 26px; 
    font-weight: bold;
    color: white;
    
`;
const Records = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.haveContent ? 'start' : 'center'};
    background-color: white;
    border-radius: 5px 5px 0 0;
    color: #868686;
    width: 100%;
    height: 80%;
    padding: ${props => props.haveContent ? '23px 11px 0 11px' : '0'};
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 5px;
        background-color: white; 
    }
    &::-webkit-scrollbar-thumb {
        background: #a328d6;
        border-radius: 5px 5px 0 0;
    }
    p {
        display: inline-block;
        width: 180px;
        text-align: center;
        font-size: 20px;
    }
`;
const ChangeValueButtons = styled.div `
    margin-top: 13px;
    margin-bottom: 16px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .bottom-buttons {
        height: 114px;
        width: 48%;
        display: flex;
        background-color: #A328D6;
        color: white;
        flex-direction: column;
        border-radius: 5px;
        padding: 12px;
        justify-content: space-between;
        font-weight: bold;
        
        p {
            line-height: 20px;
            font-size: 17px;
            display: inline-block;
            width: 64px;
         }
    }
`;
const Record = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
    div {
        display: flex;    
    }
`;
const RecordDate = styled.div `
    font-size: 16px;
    color: #c6c6c6;
    margin-right: 10px;
    display: inline-block;
    width: 45px;
`;  
const RecordName = styled.div `
    font-size: 16px;
    color: black;
`;
const RecordValue = styled.div `
    color: ${props => props.color};
`;
const Total = styled.div `
    z-index: 1;
    background-color: white;
    border-top: ${props => props.haveContent ? `solid 1px rgba(133, 133, 133, 0.3)` : 'none' };
    height: 50px;
    width: 100%;
    border-radius: 0 0 5px 5px;
    align-items: center;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    font-size: 17px;
    p { 
        text-align: start;
        font-weight: bold;
        color: black;
    }
    span { 
        color: ${props => props.color};
    }
`;

export {
    Container,
    Top,
    Header,
    Records,
    ChangeValueButtons,
    Record,
    RecordDate,
    RecordName,
    RecordValue,
    Total,
}
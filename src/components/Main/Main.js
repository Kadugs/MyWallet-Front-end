import { ContainerMain, Top, Header, Records } from "../Main/ContainerMain"
import {ExitOutline} from "react-ionicons"
export default function Main() {
    const nome = "Fulano";
    const records = [];
    
    function RenderRecords() {

    }
    
    return (
        <ContainerMain>
            <Top>
                <Header>Olá, {nome}</Header>
                <ExitOutline color="white"/>
            </Top>
            <Records>
                {records.length === 0 ?
                 <p>Não há registros de entrada ou saída</p> 
                 : 
                 RenderRecords}
            </Records>
        </ContainerMain>
    )
}
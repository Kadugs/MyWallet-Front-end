import { 
    Container, 
    Top, 
    Header, 
    Records, 
    ChangeValueButtons,
    Record,
    RecordDate,
    RecordValue,
    RecordTitle,
    Total
} from "../Main/ContainerMain"
import {IoAddCircleOutline, IoRemoveCircleOutline, IoExitOutline} from "react-icons/io5"
import {Link} from "react-router-dom";
import dayjs from "dayjs"
import {MainScreenLoading} from "../Loading"

export default function Main() {
    const total = 1000;
    const nome = "Fulano";
    const records = [
        {
            title: "Teste1",
            date: dayjs().format("DD/MM"),
            value: 40.00,
            type: "out",
        },
        {
            title: "Teste2",
            date: "20/05",
            value: 100.00,
            type: "in",
        },
    ];
    
    return (
        <Container>
            <Top>
                <Header>Olá, {nome}</Header>
                <IoExitOutline color="white" fontSize="26px"/>
            </Top>
            <Records haveContent={records.length > 0}>
                {
                records.length === 0 ?
                 <p>Não há registros de entrada ou saída</p> 
                 : 
                records.map(record => (
                    <Record>
                        <div>
                        <RecordDate>{record.date}</RecordDate>
                        <RecordTitle>{record.title}</RecordTitle>
                        </div>
                        <RecordValue 
                            color={record.type === 'in' ? '#03AC00' : '#C70000'}
                        >{record.value.toFixed(2)}</RecordValue>
                    </Record >))
                }
                <Total color={total >= 0 ? '#03AC00' : '#C70000'}>
                    <p>SALDO</p>
                    <span>{total.toFixed(2)}</span>
                </Total>

            </Records>
            <ChangeValueButtons>
                    <Link to="/in" className="bottom-buttons">
                        <IoAddCircleOutline color="white" fontSize="22px"/>
                        <p>Nova entrada</p>
                    </Link>
                    <Link  to="/out" className="bottom-buttons">
                        <IoRemoveCircleOutline color="white" fontSize="22px"/>
                        <p>Nova saída</p>
                    </Link>
            </ChangeValueButtons>
        </Container>
    )
}
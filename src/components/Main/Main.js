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
import { getTransactions, signOut } from "../../services/API";
import {useState, useEffect} from "react";
import { useHistory } from "react-router";
export default function Main() {
    const total = 1000;
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const { token, name } = JSON.parse(localStorage.getItem("@userInfos"));

    useEffect(() => {
        setIsLoading(true);
        getTransactions(token)
        .then((transactions) => {
            setRecords(transactions.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.error(err)
            history.push("/sign-in");
            localStorage.removeItem("@userInfos");
            alert("Erro no servidor!");
            setIsLoading(false);
        })    
    }, [history, token, setIsLoading])

    function logOut() {
        signOut(token)
         .then(() => {
             localStorage.removeItem("@userInfos");
             history.push("/sign-in");
         })
         .catch((err) => {
             console.log(err)
             alert("Não foi possível deslogar");
         })
    }
        return (
            <Container>
            <Top>
                <Header>Olá, {name}</Header>
                <IoExitOutline color="white" fontSize="26px" onClick={logOut} />
            </Top>
            <Records haveContent={records.length > 0}>
                {
                isLoading ? <MainScreenLoading/> :
                records.length === 0 ?
                 <p>Não há registros de entrada ou saída</p> 
                 : 
                records.map(record => (
                    <Record>
                        <div>
                        <RecordDate>{dayjs(record.date).format("DD/MM")}</RecordDate>
                        <RecordTitle>{record.title}</RecordTitle>
                        </div>
                        <RecordValue 
                            color={record.type === 'in' ? '#03AC00' : '#C70000'}
                        >{record.value.toFixed(2)}</RecordValue>
                    </Record >))
                }
                <Total color={total >= 0 ? '#03AC00' : '#C70000'}>
                    {records.length === 0 ? "" :
                        (<>
                            <p>SALDO</p>
                            <span>{total.toFixed(2)}</span>
                            
                        </>)
                    }
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
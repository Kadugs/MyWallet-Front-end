import {
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoExitOutline,
} from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { MainScreenLoading } from '../Loading';
import { getTransactions, signOut } from '../../services/API';
import {
  Container,
  Top,
  Header,
  Records,
  ChangeValueButtons,
  Record,
  RecordDate,
  RecordValue,
  RecordName,
  Total,
} from './ContainerMain';

export default function Main() {
  const [total, setTotal] = useState(0);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem('@userInfos'));
  if (!userInfo) {
    history.push('/sign-in');
  }
  useEffect(() => {
    setIsLoading(true);
    getTransactions(userInfo?.token)
      .then((transactions) => {
        setRecords(transactions.data);
        setIsLoading(false);
        transactions.data.forEach((transaction) => {
          if (transaction.type === 'in') {
            setTotal((t) => t + transaction.value);
          } else {
            setTotal((t) => t - transaction.value);
          }
        });
      })
      .catch(() => {
        history.push('/sign-in');
        localStorage.removeItem('@userInfos');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro no servidor',
        });
        setIsLoading(false);
      });
  }, [history, userInfo?.token, setIsLoading]);

  function logOut() {
    signOut(userInfo?.token)
      .then(() => {
        localStorage.removeItem('@userInfos');
        history.push('/sign-in');
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não foi possível deslogar',
        });
      });
  }
  if (!userInfo) {
    return <></>;
  }
  return (
    <Container>
      <Top>
        <Header>
          Olá,{' '}
          {userInfo?.name.length > 17
            ? `${userInfo.name.substring(0, 20)}...`
            : userInfo.name}
        </Header>
        <IoExitOutline color="white" fontSize="26px" onClick={logOut} />
      </Top>
      <Records haveContent={records.length > 0}>
        {isLoading ? (
          <MainScreenLoading />
        ) : records.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          records.map((record, index) => (
            <Record key={index}>
              <div>
                <RecordDate>{dayjs(record.date).format('DD/MM')}</RecordDate>
                <RecordName>
                  {record.name.length > 28
                    ? `${record.name.substring(0, 32)}...`
                    : record.name}
                </RecordName>
              </div>
              <RecordValue color={record.type === 'in' ? '#03AC00' : '#C70000'}>
                {(record.value / 100).toFixed(2)}
              </RecordValue>
            </Record>
          ))
        )}
      </Records>
      <Total color={total >= 0 ? '#03AC00' : '#C70000'} haveContent={records.length > 0}>
        {records.length === 0 ? (
          ''
        ) : (
          <>
            <p>SALDO</p>
            <span>{(total / 100).toFixed(2)}</span>
          </>
        )}
      </Total>
      <ChangeValueButtons>
        <Link to="/in" className="bottom-buttons">
          <IoAddCircleOutline color="white" fontSize="22px" />
          <p>Nova entrada</p>
        </Link>
        <Link to="/out" className="bottom-buttons">
          <IoRemoveCircleOutline color="white" fontSize="22px" />
          <p>Nova saída</p>
        </Link>
      </ChangeValueButtons>
    </Container>
  );
}

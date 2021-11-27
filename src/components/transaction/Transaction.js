import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Container, Header } from './ContainerTransaction';
import { Input, Button, Error } from '../UniversalStyles';
import { postTransaction } from '../../services/API';
import { ButtonLoading } from '../Loading';

export default function Transaction({ type }) {
  const history = useHistory();
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [text, setText] = useState('');
  const userInfo = JSON.parse(localStorage.getItem('@userInfos'));
  function requestTransaction() {
    setIsButtonDisabled(true);

    const body = {
      name: description,
      value: value.toString(2) * 100,
      type,
    };
    if (!userInfo) {
      history.push('/sign-in');
    }
    postTransaction(body, userInfo?.token)
      .then(() => {
        history.push('/');
        setIsButtonDisabled(false);
      })
      .catch((error) => {
        if (error.response) setErrorText(error.response.data);
        setIsButtonDisabled(false);
      });
  }
  useEffect(() => {
    switch (type) {
      case 'in':
        setText('entrada');
        break;
      case 'out':
        setText('saída');
        break;
      default:
        setText('');
    }
  }, [setText, type]);
  return (
    <Container>
      <IoArrowBackOutline onClick={() => history.push('/')} className="back-button" />
      <Header>Nova {text}</Header>
      <Input
        type="text"
        placeholder="Valor"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button onClick={requestTransaction}>
        {isButtonDisabled ? <ButtonLoading /> : `Salvar ${text}`}
      </Button>
      <Error>{errorText}</Error>
    </Container>
  );
}

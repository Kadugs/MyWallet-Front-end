import {Container, Logo, Form, P, Error} from './ContainerAccount';
import {Input, Button} from '../UniversalStyles';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import {signIn} from '../../services/API.js';
import {ButtonLoading} from '../Loading'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const history = useHistory();

    function verifyLogin(event) {
        event.preventDefault();
        setIsButtonDisabled(true);
        const body = {
            email: email,
            password: password,
        }
        signIn(body)
         .then((res) => {
            localStorage.setItem("@token", JSON.stringify(res.data));
            history.push("/");
            setIsButtonDisabled(false)
         })
         .catch((error) => {
            if(error.response) setErrorText(error.response.data);
            else setErrorText("Erro do servidor.");
            setIsButtonDisabled(false);
        })
    } 

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={verifyLogin}>
                <Input type="text" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                <Input type="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)}/>
                <Button type="submit" disabled={isButtonDisabled}>{isButtonDisabled ? <ButtonLoading /> : "Entrar"}</Button>
            </Form>
            <Error>{errorText}</Error>
            <Link to="/sign-up">
                <P>Primeira vez? Cadastre-se!</P>
            </Link>
        </Container>
    )
}
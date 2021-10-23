import { Container, Logo, Form, P, } from './ContainerAccount';
import { Input, Button, Error, } from '../UniversalStyles';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import {signUp} from '../../services/API';
import {ButtonLoading} from '../Loading';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorText, setErrorText] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const history = useHistory();

    function verifyRegister(event) {
        event.preventDefault();
        setIsButtonDisabled(true);
        const body = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        signUp(body)
         .then(() => {
            history.push("/sign-in");
            setIsButtonDisabled(false);
         })
         .catch((error) => {
             if(error.response) setErrorText(error.response.data);
             else setErrorText("Erro do servidor"); 
             setIsButtonDisabled(false)
            })
    }
    return (
            <Container>
                <Logo>MyWallet</Logo>
                <Form onSubmit={verifyRegister}>
                    <Input type="name" placeholder="Nome" value={name} onChange={event => setName(event.target.value)}/>
                    <Input type="text" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                    <Input type="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)}/>
                    <Input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
                    <Button type="submit" disabled={isButtonDisabled}>{isButtonDisabled ? <ButtonLoading /> : "Cadastrar"}</Button>
                </Form>
                    <Error>{errorText}</Error>
                <Link to="/sign-in">
                    <P>Já tem uma conta? Entre agora!</P>
                </Link>
            </Container>
    )
}
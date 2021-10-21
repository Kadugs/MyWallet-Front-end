import {Container, Logo, Form, P} from './ContainerAccount';
import {Input, Button} from '../UniversalStyles';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function verifyLogin(event) {
        event.preventDefault();
        // const body = {
        //     email: email,
        //     password: password,
        // }
    } 

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={verifyLogin}>
                <Input type="email" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                <Input type="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)}/>
                <Button type="submit">Entrar</Button>
            </Form>
            <Link to="/signup">
                <P>Primeira vez? Cadastre-se!</P>
            </Link>
        </Container>
    )
}
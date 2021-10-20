import {ContainerAccount, Logo, Form, P} from './ContainerAccount';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function verifyLogin(event) {
        event.preventDefault();
        const body = {
            email: email,
            password: password,
        }
    } 

    return (
        <ContainerAccount>
            <Logo>MyWallet</Logo>
            <Form onSubmit={verifyLogin}>
                <input type="email" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)}/>
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/signup">
                <P>Primeira vez? Cadastre-se!</P>
            </Link>
        </ContainerAccount>
    )
}
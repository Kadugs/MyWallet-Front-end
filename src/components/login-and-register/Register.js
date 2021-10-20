import {ContainerAccount, Logo, Form, P} from './ContainerAccount';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function verifyRegister(event) {
        event.preventDefault();
        const body = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
    }
    return (
            <ContainerAccount>
                <Logo>MyWallet</Logo>
                <Form onSubmit={verifyRegister}>
                    <input type="name" placeholder="Nome" value={name} onChange={event => setName(event.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)}/>
                    <input type="password" placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)}/>
                    <input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </Form>
                <Link to="/signin">
                    <P>Já tem uma conta? Entre agora!</P>
                </Link>
            </ContainerAccount>
    )
}
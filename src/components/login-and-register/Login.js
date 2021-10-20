import {ContainerAccount, Logo, Form, P} from './ContainerAccount';
import {Link} from 'react-router-dom';

export default function Login() {
    function verifyLogin() {

    } 

    return (
        <ContainerAccount>
            <Logo>MyWallet</Logo>
            <Form onSubmit={verifyLogin}>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/signup">
                <P>Primeira vez? Cadastre-se!</P>
            </Link>
        </ContainerAccount>
    )
}
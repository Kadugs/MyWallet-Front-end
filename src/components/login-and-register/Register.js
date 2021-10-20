import {ContainerAccount, Logo, Form, P} from './ContainerAccount';
import {Link} from 'react-router-dom';

export default function Register() {
    function verifyRegister() {

    }
    return (
            <ContainerAccount>
                <Logo>MyWallet</Logo>
                <Form onSubmit={verifyRegister}>
                    <input type="name" placeholder="Nome"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirme a senha"/>
                    <button type="submit">Cadastrar</button>
                </Form>
                <Link to="/">
                    <P>Já tem uma conta? Entre agora!</P>
                </Link>
            </ContainerAccount>
    )
}
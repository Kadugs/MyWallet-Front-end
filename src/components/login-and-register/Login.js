import {ContainerAccount} from './ContainerAccount';

export default function Login() {
    function verifyLogin() {

    } 

    return (
        <ContainerAccount>
            <h1>MyWallet</h1>
            <form onSubmit={verifyLogin}>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit"/>
            </form>
            <Link to="/signup">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </ContainerAccount>
    )
}
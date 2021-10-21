import { Switch, Route } from "react-router-dom";
import Login from './login-and-register/Login';
import Register from './login-and-register/Register';
import Main from './Main/Main'
import Transaction from './transaction/Transaction'
export default function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/signin">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Register />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/in">
                    <Transaction type={1} />
                </Route>
                <Route exact path="/out">
                    <Transaction type={2} />
                </Route>
            </Switch>
        </>
    );
}
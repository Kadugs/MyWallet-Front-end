import { Switch, Route } from "react-router-dom";
import Login from './login-and-register/Login';
import Register from './login-and-register/Register';
import Main from './Main/Main'
import Transaction from './transaction/Transaction'
export default function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/sign-in">
                    <Login />
                </Route>
                <Route exact path="/sign-up">
                    <Register />
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/in">
                    <Transaction type="in" />
                </Route>
                <Route exact path="/out">
                    <Transaction type="out" />
                </Route>
            </Switch>
        </>
    );
}
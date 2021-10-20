import { Switch, Route } from "react-router-dom";
import Login from './login-and-register/Login';
import Register from './login-and-register/Register';
export default function Routers() {
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Register />
                </Route>
            </Switch>
        </>
    );
}
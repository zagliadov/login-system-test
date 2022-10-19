
import classes from './main.module.sass';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import Home from '../Home/Home';
import { Switch, Route } from "react-router-dom";

const Main = () => {
    const { main } = classes;
    
    return (
        <main className={main}>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
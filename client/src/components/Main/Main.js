
import classes from './main.module.sass';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

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
                    <div><h1>Home</h1></div>
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
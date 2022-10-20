
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import { Switch, Route } from "react-router-dom";

const Main = () => {
    
    return (
        <main>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/" exact>
                    <div><h1>Home</h1></div>
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
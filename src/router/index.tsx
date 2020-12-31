import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';

const Router: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route exact path='/login' component={Login} />
                <Route path='/home' component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Router
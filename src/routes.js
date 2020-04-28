import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';

import LandingScreen from './screens/public/Landing/LandingScreen'
import LoginRegisterScreen from './screens/public/LoginRegister/LoginRegisterScreen'
import NotFoundScreen from './screens/public/Notfound/NotFoundScreen'
import DefaultLayout from './screens/professor/DefaultLayout'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={LandingScreen} />
                    <Route path="/auth/:type" component={LoginRegisterScreen} />
                    <Route path="/professor" name="Home" render={props => <DefaultLayout {...props}/>} />

                    <Route path="/404NotFound" component={NotFoundScreen} />
                    

                    <Route path="*" component={NotFoundScreen} />
                </Switch>
            </Router>
        )
    }
}

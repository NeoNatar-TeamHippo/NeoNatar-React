import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import NoMatch from './NoMatch';
import { PATHS } from '../constants';

import dashboard from '../../dashboard';
// import app from '../../app';
import signup from '../../signup';
import signin from '../../signin';

const { DASHBOARD, SIGNUP, SIGNIN } = PATHS;
// const { App } = app.components;
const { Dashboard } = dashboard.components;
const { SignUp } = signup.components;
const { SignIn } = signin.components;

const Routes = () => (
    <BrowserRouter>
        <ScrollToTop>
            {/* <App> */}
            <Switch>
                <Route path={SIGNIN} exact strict component={SignIn} />
                <Route path={SIGNUP} exact strict component={SignUp} />
                <Route path={DASHBOARD} exact strict component={Dashboard} />
                <Route component={NoMatch} />
            </Switch>
            {/* </App> */}
        </ScrollToTop>
    </BrowserRouter>
);

export default Routes;

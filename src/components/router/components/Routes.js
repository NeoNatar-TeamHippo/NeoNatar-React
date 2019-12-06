import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import NoMatch from './NoMatch';
import { PATHS } from '../constants';

import history from '../../history/History';
import dashboard from '../../dashboard';
import campaigns from '../../campaigns';
import app from '../../app';
import signup from '../../signup';
import signin from '../../signin';

const { CAMPAIGNS, DASHBOARD, SIGNUP, SIGNIN } = PATHS;
const { App } = app.components;
const { Dashboard } = dashboard.components;
const { Campaigns } = campaigns.components;
const { SignUp } = signup.components;
const { SignIn } = signin.components;

const Routes = () => (
    <Router history={history}>
        <ScrollToTop>
            <App>
                <Switch>
                    <Route path={DASHBOARD} exact strict component={Dashboard} />
                    <Route path={CAMPAIGNS} exact strict component={Campaigns} />
                    <Route path={SIGNIN} exact strict component={SignIn} />
                    <Route path={SIGNUP} exact strict component={SignUp} />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
);

export default Routes;

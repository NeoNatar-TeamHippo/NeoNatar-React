import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import NoMatch from './NoMatch';
import history from '../../history/History';
import { PATHS } from '../constants';

import home from '../../home';
import dashboard from '../../dashboard';
import app from '../../app';

const { DASHBOARD, HOME } = PATHS;
const { App } = app.components;
const { Home } = home.components;
const { Dashboard } = dashboard.components;

const Routes = () => (
    <Router history={history}>
        <ScrollToTop>
            <App>
                <Switch>
                    <Route path={HOME} exact strict component={Home} />
                    <Route path={DASHBOARD} exact strict component={Dashboard} />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
);

export default Routes;

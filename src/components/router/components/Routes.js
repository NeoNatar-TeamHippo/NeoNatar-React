import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import NoMatch from './NoMatch';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';
import ScrollToTop from './ScrollToTop';

import { PATHS } from '../constants';

import home from '../../home';
import dashboard from '../../dashboard';
import history from '../../history/History';
import signup from '../../signup';
import signin from '../../signin';

const { DASHBOARD, SIGNUP, SIGNIN, HOME } = PATHS;
const { Dashboard } = dashboard.components;
const { SignUp } = signup.components;
const { SignIn } = signin.components;
const { Home } = home.components;

const Routes = () => {
    const { authenticated } = useSelector(state => state.signIn);

    return (
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <Switch>
                    <PublicRoute
                        authenticated={authenticated}
                        path={HOME}
                        exact
                        strict
                        component={Home}
                        restricted={false}
                    />
                    <PrivateRoute
                        authenticated={authenticated}
                        path={DASHBOARD}
                        component={Dashboard}
                    />
                    <PublicRoute
                        authenticated={authenticated}
                        path={SIGNIN}
                        exact
                        strict
                        component={SignIn}
                        restricted
                    />
                    <PublicRoute
                        authenticated={authenticated}
                        path={SIGNUP}
                        exact
                        strict
                        component={SignUp}
                        restricted={false}
                    />
                    <PublicRoute
                        authenticated={authenticated}
                        path={HOME}
                        exact
                        strict
                        component={Home}
                        restricted={false}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </ScrollToTop>
        </ConnectedRouter>
    );
};

export default Routes;

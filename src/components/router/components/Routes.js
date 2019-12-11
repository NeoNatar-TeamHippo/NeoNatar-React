import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import jwtDecode from 'jwt-decode';

import NoMatch from './NoMatch';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

import ScrollToTop from './ScrollToTop';
import { PATHS } from '../constants';

import app from '../../app';
import dashboard from '../../dashboard';
import history from '../../history/History';
import signup from '../../signup';
import signin from '../../signin';

const { DASHBOARD, SIGNUP, SIGNIN } = PATHS;
const { App } = app.components;
const { Dashboard } = dashboard.components;
const { SignUp } = signup.components;
const { SignIn } = signin.components;

const Routes = () => {
    const { token } = useSelector(state => state.signIn);
    const userToken = token || localStorage.getItem('FBToken');
    const checkTokenAuthentication = () => {
        if (userToken) {
            const tokeToDecode = userToken.split(' ')[1];
            const decodedToken = jwtDecode(tokeToDecode);
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('FBToken');
                return false;
            }
            return true;
        }
        return false;
    };
    const authenticated = checkTokenAuthentication();
    return (
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <App>
                    <Switch>
                        <PublicRoute
                            authenticated={authenticated}
                            path={DASHBOARD}
                            exact
                            strict
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
                        <Route component={NoMatch} />
                    </Switch>
                </App>
            </ScrollToTop>
        </ConnectedRouter>
    );
};

export default Routes;

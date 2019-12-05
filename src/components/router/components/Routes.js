import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

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

const Routes = () => {
    const checkAuthentication = () => {
        const token = localStorage.getItem('FBToken');
        if (token) {
            const tokeToDecode = token.split(' ')[1];
            const decodedToken = jwtDecode(tokeToDecode);
            if (decodedToken.exp * 1000 < Date.now()) {
                localStorage.removeItem('FBToken');
                return false;
            }
            return true;
        }
        return false;
    };
    const authenticated = checkAuthentication();

    return (
        <BrowserRouter>
            <ScrollToTop>
                {/* <App> */}
                <Switch>
                    <PrivateRoute
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
                {/* </App> */}
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Routes;

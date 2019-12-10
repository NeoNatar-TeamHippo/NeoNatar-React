import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ authenticated, component: Comp, ...rest }) => (
    <Route
        {...rest}
        component={props => (authenticated ? <Comp {...props} /> : <Redirect to="/signin" />)
        }
    />
);

export default PrivateRoutes;

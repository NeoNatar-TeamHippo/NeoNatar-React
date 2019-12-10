import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ authenticated, component: Comp, ...rest }) => {
    const renderComponent = props => {
        let template = '';
        if (rest.restricted) {
            if (authenticated) {
                template = (<Redirect to="/overview" />);
            } else {
                template = (<Comp {...props} />);
            }
        } else {
            template = (<Comp {...props} />);
        }
        return template;
    };
    return (
        <Route
            {...rest}
            component={props => renderComponent(props)}
        />
    );
};

export default PublicRoutes;

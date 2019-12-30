import React from 'react';
import { Route, Switch } from 'react-router-dom';

import overview from '../../overview';
import campaigns from '../../campaigns';
import locations from '../../locations';
import tickets from '../../tickets';
import layouts from '../../layouts';
import vidoes from '../../videos';
import savedLocations from '../../savedLocations';

const { Overview } = overview.components;
const { Campaigns } = campaigns.components;
const { Videos } = vidoes.components;
const { Locations, LocationById, NewLocation } = locations.components;
const { Tickets, ViewTicket } = tickets.components;
const { SavedLocations, SavedLocationById } = savedLocations.components;

const { DashboardLayout } = layouts.components;
const Dashboard = props => {
    const { path } = props.match;
    const getPathWay = pathRoute => `${path}/${pathRoute}`;
    const getNestedPath = (pathRoute, child) => `${path}/${pathRoute}/${child}`;
    const routes = [
        { component: Overview, path },
        { component: Campaigns, path: getPathWay('campaigns') },
        { component: SavedLocations, path: getPathWay('savedLocations') },
        { component: Videos, path: getPathWay('videos') },
        { component: SavedLocationById, path: getNestedPath('savedLocations', ':id') },
        { component: Locations, path: getPathWay('locations') },
        { component: NewLocation, path: `${getPathWay('locations')}/new` },
        { component: Tickets, path: getPathWay('tickets') },
        { component: ViewTicket, path: getNestedPath('tickets', ':id') },
        { component: LocationById, path: getNestedPath('locations', ':id') },
    ];
    const renderRoutes = routeComponent => routeComponent.map(route => {
        const { path: routePath, component } = route;
        return (
            <Route key={routePath} path={routePath} exact strict component={component} />
        );
    });
    return (
        <DashboardLayout>
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </DashboardLayout>
    );
};

export default Dashboard;

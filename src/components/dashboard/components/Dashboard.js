import React from 'react';
import { Route, Switch } from 'react-router-dom';

import overview from '../../overview';
import campaigns from '../../campaigns';
import locations from '../../locations';
import layouts from '../../layouts';
import commercials from '../../commercials';
import savedLocations from '../../savedLocations';

const { Overview } = overview.components;
const { Campaigns } = campaigns.components;
const { Commercials } = commercials.components;
const { Locations, LocationById } = locations.components;
const { SavedLocations } = savedLocations.components;

const { DashboardLayout } = layouts.components;
const Dashboard = props => {
    const { path } = props.match;
    const getPathWay = pathRoute => `${path}/${pathRoute}`;
    const getNestedPath = (pathRoute, child) => `${path}/${pathRoute}/${child}`;
    const routes = [
        { component: Overview, path },
        { component: Campaigns, path: getPathWay('campaigns') },
        { component: SavedLocations, path: getPathWay('savedLocations') },
        { component: Locations, path: getPathWay('locations') },
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
                <Route path={path} exact strict component={Overview} />
                <Route path={getPathWay('campaigns')} exact component={Campaigns} />
                <Route path={getPathWay('commercials')} exact component={Commercials} />
                <Route path={getPathWay('locations')} exact component={Locations} />
                <Route path={getNestedPath('locations', ':id')} exact component={LocationById} />
                {renderRoutes(routes)}
            </Switch>
        </DashboardLayout>
    );
};

export default Dashboard;

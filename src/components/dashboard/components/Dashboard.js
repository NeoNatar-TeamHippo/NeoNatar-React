import React from 'react';
import { Route, Switch } from 'react-router-dom';

import overview from '../../overview';
import campaigns from '../../campaigns';
import locations from '../../locations';
import tickets from '../../tickets';
import layouts from '../../layouts';
import commercials from '../../commercials';
import savedLocations from '../../savedLocations';
import transactions from '../../transactions';

import PrivateRoute from '../../router/components/PrivateRoutes';
import { useSelector } from 'react-redux';

const { Overview } = overview.components;
const { Campaigns, ViewCampaign, NewCampaigns } = campaigns.components;
const { Commercials } = commercials.components;
const { Locations, LocationById, NewLocation } = locations.components;
const { Tickets, ViewTicket } = tickets.components;
const { SavedLocations, SavedLocationById } = savedLocations.components;
const { Transactions } = transactions.components;

const { DashboardLayout } = layouts.components;
const Dashboard = props => {
    const { path } = props.match;
    const getPathWay = pathRoute => `${path}/${pathRoute}`;
    const getNestedPath = (pathRoute, child) => `${path}/${pathRoute}/${child}`;
    const { authenticated } = useSelector(state => state.signIn);
    const routes = [
        { component: Overview, path },
        { component: Campaigns, path: getPathWay('campaigns') },
        { component: ViewCampaign, path: getNestedPath('campaigns', ':id') },
        { component: NewCampaigns, path: getPathWay('new-campaigns') },
        { component: SavedLocations, path: getPathWay('savedLocations') },
        { component: Commercials, path: getPathWay('commercials') },
        { component: SavedLocationById, path: getNestedPath('savedLocations', ':id') },
        { component: Locations, path: getPathWay('locations') },
        { component: NewLocation, path: `${getPathWay('locations')}/new` },
        { component: Tickets, path: getPathWay('tickets') },
        { component: ViewTicket, path: getNestedPath('tickets', ':id') },
        { component: LocationById, path: getNestedPath('locations', ':id') },
        { component: Transactions, path: getPathWay('transactions') },
    ];
    const renderRoutes = routeComponent => routeComponent.map(route => {
        const { path: routePath, component } = route;

        return (
            <PrivateRoute authenticated={authenticated} key={routePath} path={routePath} exact strict component={component} />
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

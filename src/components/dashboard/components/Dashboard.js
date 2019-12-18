import React from 'react';
import { Route, Switch } from 'react-router-dom';

import overview from '../../overview';
import campaigns from '../../campaigns';
import locations from '../../locations';
import tickets from '../../tickets';
import layouts from '../../layouts';

const { Overview } = overview.components;
const { Campaigns } = campaigns.components;
const { Tickets } = tickets.components;
const { Locations, LocationById } = locations.components;

const { DashboardLayout } = layouts.components;
const Dashboard = props => {
    const { path } = props.match;
    const getPathWay = pathRoute => `${path}/${pathRoute}`;
    const getNestedPath = (pathRoute, child) => `${path}/${pathRoute}/${child}`;
    return (
        <DashboardLayout>
            <Switch>
                <Route path={path} exact strict component={Overview} />
                <Route path={getPathWay('campaigns')} exact component={Campaigns} />
                <Route path={getPathWay('locations')} exact component={Locations} />
                <Route path={getPathWay('tickets')} exact component={Tickets} />
                <Route path={getNestedPath('locations', ':id')} exact component={LocationById} />
            </Switch>
        </DashboardLayout>
    );
};

export default Dashboard;

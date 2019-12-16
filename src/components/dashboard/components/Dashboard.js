import React from 'react';
import { Route } from 'react-router-dom';

import overview from '../../overview';
import campaigns from '../../campaigns';
import locations from '../../locations';
import layouts from '../../layouts';

const { Overview } = overview.components;
const { Campaigns } = campaigns.components;
const { Locations } = locations.components;

const { DashboardLayout } = layouts.components;
const Dashboard = props => {
    const { path } = props.match;
    const getPathWay = pathRoute => `${path}/${pathRoute}`;
    return (
        <DashboardLayout>
            <Route path={path} exact strict component={Overview} />
            <Route path={getPathWay('campaigns')} component={Campaigns} />
            <Route path={getPathWay('locations')} component={Locations} />
        </DashboardLayout>
    );
};

export default Dashboard;

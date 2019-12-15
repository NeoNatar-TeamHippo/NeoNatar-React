/* eslint-disable react/jsx-no-literals */
import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

import SideMenu from './SideMenu';

import overview from '../../overview';
import campaigns from '../../campaigns';
import locations from '../../locations';

const { Overview } = overview.components;
const { Campaigns } = campaigns.components;
const { Locations } = locations.components;

const { Content, Sider } = Layout;

const Dashboard = props => {
    const { path } = props.match;

    return (
        <Layout>
            <Sider>
                <SideMenu />
            </Sider>
            <Content className="dashboard-content">
                <Route path={path} exact strict component={Overview} />
                <Route path={`${path}/campaigns`} component={Campaigns} />
                <Route path={`${path}/locations`} component={Locations} />
            </Content>
        </Layout>
    );
};

export default Dashboard;

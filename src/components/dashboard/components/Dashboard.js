/* eslint-disable react/jsx-no-literals */
import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';

import SideMenu from './SideMenu';
import overview from '../../overview';
import campaigns from '../../campaigns';

const { Overview } = overview.components;
const { Campaigns } = campaigns.components;

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
            </Content>
        </Layout>
    );
};

export default Dashboard;

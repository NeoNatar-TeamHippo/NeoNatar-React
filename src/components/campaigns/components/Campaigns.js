import React from 'react';
import { Layout } from 'antd';

import AllCampaigns from './AllCampaigns';
import sideMenu from '../../sideMenu';

const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;

const Campaigns = () => (
    <Layout>
        <Sider>
            <SideMenu />
        </Sider>
        <Content className="dashboard-content">
            <AllCampaigns />
        </Content>
    </Layout>
);

export default Campaigns;

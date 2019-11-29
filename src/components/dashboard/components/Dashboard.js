import React from 'react';
import { Card , Layout, Menu } from 'antd';

import { DASHBOARD_CONTENT } from '../constants';
import sideMenu from '../../sideMenu';

const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;
const { Item } = Menu;

const Dashboard = () => (
    <Layout>
        <Sider>
            <SideMenu />
        </Sider>
        <Content className={DASHBOARD_CONTENT}>
            <Menu mode={'horizontal'}>
                <Item><Card>Default</Card></Item>
                <Item><Card>Default</Card></Item>
                <Item><Card>Default</Card></Item>
                <Item><Card>Default</Card></Item>
            </Menu>
        </Content>
    </Layout>
);

export default Dashboard;

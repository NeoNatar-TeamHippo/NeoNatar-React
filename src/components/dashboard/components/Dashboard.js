import React from 'react';
import { Badge, Card, Layout, Menu } from 'antd';
import UnresolvedTickets from './UnresolvedTickets';
import { CARDS } from '../constants';
import sideMenu from '../../sideMenu';

const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;
const { Item } = Menu;

const Dashboard = () => (
    <Layout>
        <Sider>
            <SideMenu />
        </Sider>
        <Content>
            <Menu className="dashboard-content" mode="horizontal">
                {CARDS.map(({ counts, type }) => (
                    <Item key={type}>
                        <Badge count={counts}>
                            <Card className="dashboard-card">{type}</Card>
                        </Badge>
                    </Item>
                ))}
            </Menu>
            <Menu mode="horizontal">
                <Item>
                    <UnresolvedTickets className="dashboard-ticket" />
                </Item>
            </Menu>
        </Content>
    </Layout>
);

export default Dashboard;

import React from 'react';
import { Badge, Card, Layout, Menu } from 'antd';
import UnresolvedTickets from './UnresolvedTickets';
import { CARDS, CLASSNAMES } from '../constants';
import sideMenu from '../../sideMenu';

const { DASHBOARD_CONTENT, DASHBOARD_CARD, DASHBOARD_TICKET } = CLASSNAMES;
const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;
const { Item } = Menu;

const Dashboard = () => (
    <Layout>
        <Sider>
            <SideMenu />
        </Sider>
        <Content>
            <Menu className={DASHBOARD_CONTENT} mode="horizontal">
                {CARDS.map(({ counts, strings }) => (
                    <Item key={strings}>
                        <Badge count={counts}>
                            <Card className={DASHBOARD_CARD}>{strings}</Card>
                        </Badge>
                    </Item>
                ))}
            </Menu>
            <Menu mode="horizontal">
                <Item>
                    <UnresolvedTickets className={DASHBOARD_TICKET} />
                </Item>
            </Menu>
        </Content>
    </Layout>
);

export default Dashboard;

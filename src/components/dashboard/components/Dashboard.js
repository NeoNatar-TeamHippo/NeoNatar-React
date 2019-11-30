import React from 'react';
import { Badge, Card, Layout, Menu } from 'antd';
// import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

import { CLASSNAMES, STRINGS } from '../constants';
import sideMenu from '../../sideMenu';

const { DASHBOARD_CONTENT, DASHBOARD_CARD } = CLASSNAMES;
const { APPROVED_CAMPAIGNS, LOCATIONS, PENDING_APPROVAL, STAFF } = STRINGS;
// const data = [];
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
                <Item>
                    <Badge count={10}>
                        <Card className={DASHBOARD_CARD}>{PENDING_APPROVAL}</Card>
                    </Badge>
                </Item>
                <Item>
                    <Badge count="99+">
                        <Card className={DASHBOARD_CARD}>{APPROVED_CAMPAIGNS}</Card>
                    </Badge>
                </Item>
                <Item>
                    <Badge count={54}>
                        <Card className={DASHBOARD_CARD}>{LOCATIONS}</Card>
                    </Badge>
                </Item>
                <Item>
                    <Badge count={7}>
                        <Card className={DASHBOARD_CARD}>{STAFF}</Card>
                    </Badge>
                </Item>
            </Menu>
        </Content>
        {/* <Chart height={400} data={data} forceFit>
            <Axis name="month" />
            <Axis name="temperature" label={{ formatter: val => `${val}°C` }} />
            <Tooltip crosshairs={{ type: 'y' }} />
            <Geom type="line" position="month*temperature" size={2} color="city" />
            <Geom type="point" position="month*temperature" size={4} color="city" />
        </Chart> */}
    </Layout>
);

export default Dashboard;

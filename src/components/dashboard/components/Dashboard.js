import React from 'react';
import { Badge, Card, Layout, Menu } from 'antd';
// import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

import { CARDS, CLASSNAMES } from '../constants';
import sideMenu from '../../sideMenu';

const { DASHBOARD_CONTENT, DASHBOARD_CARD } = CLASSNAMES;
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
                {CARDS.map(({ counts, strings }) => (
                    <Item key={strings}>
                        <Badge count={counts}>
                            <Card className={DASHBOARD_CARD}>{strings}</Card>
                        </Badge>
                    </Item>
                ))}
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

import React from 'react';
import { Badge, Card, Layout, Col, Row } from 'antd';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

import { CARDS } from '../constants';
import sideMenu from '../../../sideMenu';

const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;

const Dashboard = () => (
    <Layout>
        <Sider>
            <SideMenu />
        </Sider>
        <Content className="dashboard-content">
            <Row gutter={0}>
                {CARDS.map(({ counts, type }) => (
                    <Col key={type} span={6}>
                        <Badge count={counts}>
                            <Card className="dashboard-card">{type}</Card>
                        </Badge>
                    </Col>
                ))}
            </Row>
            <Row gutter={48}>
                <Col key="unresolved-ticket" span={11}>
                    <UnresolvedTickets className="dashboard-ticket" />
                </Col>
                <Col key="tasks" span={11}>
                    <Tasks className="dashboard-ticket" />
                </Col>
            </Row>
        </Content>
    </Layout>
);

export default Dashboard;

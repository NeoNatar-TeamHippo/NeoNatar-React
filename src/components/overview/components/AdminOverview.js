import React from 'react';
import { Card, Col, Row, Typography, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

import { ADMIN_CARDS } from '../constants';

const { Text } = Typography;

const Dashboard = () => (
    <div className="dashboard-div">
        <Row gutter={48}>
            {ADMIN_CARDS.map(({ color, counts, type, link }) => (
                <Col className="dashboard-card-col" key={type} span={6}>
                    <NavLink to={link}>
                        <Card hoverable className="dashboard-card">
                            <Text className="notification-card-text">{type}</Text>
                            <br />
                            <Tag class="notification-card-tag" color={color} key={type}>
                                {counts}
                            </Tag>
                        </Card>
                    </NavLink>
                </Col>
            ))}
        </Row>
        <Row gutter={48}>
            <Col key="unresolved-ticket" span={12}>
                <UnresolvedTickets className="dashboard-ticket" />
            </Col>
            <Col key="tasks" span={12}>
                <Tasks className="dashboard-ticket" />
            </Col>
        </Row>
    </div>
);

export default Dashboard;

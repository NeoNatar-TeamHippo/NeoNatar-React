import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row, Typography, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

const { Text } = Typography;

const Dashboard = () => {
    const { overviewPendingCampignNumber,
        overviewApprovedCampignNumber } = useSelector(state => state.overview);
    const ADMIN_CARDS = [
        { color: 'green',
            counts: overviewApprovedCampignNumber,
            link: '/dashboard/campaigns',
            type: 'Approved Campaigns' },
        { color: 'volcano',
            counts: overviewPendingCampignNumber,
            link: '/dashboard/campaigns',
            type: 'Pending Approval' },
        { color: 'blue',
            counts: 7,
            link: '/dashboard/locations',
            type: 'Saved Locations' },
    ];
    return (
        <div className="dashboard-div">
            <Row gutter={48} className="client-card">
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
};

export default Dashboard;

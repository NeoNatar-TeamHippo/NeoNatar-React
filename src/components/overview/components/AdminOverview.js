import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row, Typography, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

const { Text } = Typography;

const Dashboard = () => {
    const { overviewLocationNumber,
        overviewPendingCampignNumber,
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
            counts: overviewLocationNumber,
            link: '/dashboard/locations',
            type: 'Locations' },
    ];
    return (
        <div className="dashboard-div">
            <Row gutter={48} className="client-card">
                {ADMIN_CARDS.map(({ color, counts, type, link }) => (
                    <Col className="dashboard-card-col" key={type} span={7}>
                        <NavLink to={link}>
                            <Card hoverable className="dashboard-card">
                                <Row gutter={[12, 10]}>
                                    <Text className="notification-card-text"><h3>{type}</h3></Text>
                                </Row>
                                <br />
                                <Row>
                                    <Tag class="notification-card-tag" color={color} key={type}>
                                        <h5>{counts}</h5>
                                    </Tag>
                                </Row>
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

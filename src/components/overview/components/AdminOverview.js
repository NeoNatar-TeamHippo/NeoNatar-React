import React from 'react';
import { Badge, Card, Col, Row } from 'antd';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

import { ADMIN_CARDS } from '../constants';

const Dashboard = () => (
    <div>
        <Row gutter={0}>
            {ADMIN_CARDS.map(({ counts, type }) => (
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
    </div>
);

export default Dashboard;

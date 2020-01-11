import React from 'react';
import { Card, Col, Row, Typography, Tag } from 'antd';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

import { ADMIN_CARDS } from '../constants';

const { Text } = Typography;

const Dashboard = () => (
    <div className="dashboard-div">
        <Row gutter={48}>
            {ADMIN_CARDS.map(({ color, counts, type }) => (
                <Col key={type} span={6}>
                    <Card className="dashboard-card">
                        <Text className="notification-card-text">{type}</Text>
                        <br />
                        <Tag class="notification-card-tag" color={color} key={type}>
                            {counts}
                        </Tag>
                    </Card>
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
    // <div style={{ padding: '30px' }}>
    //     <Row gutter={16}>
    //         <Col span={8}>
    //             <Card bordered>
    //                 Card content
    //             </Card>
    //         </Col>
    //         <Col span={8}>
    //             <Card bordered>
    //                 Card content
    //             </Card>
    //         </Col>
    //         <Col span={8}>
    //             <Card bordered>
    //                 Card content
    //             </Card>
    //         </Col>
    //     </Row>
    // </div>
);

export default Dashboard;

import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Tag, Table, Icon, Input, Typography, Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import {
    NEW_CAMPAIGNS,
    VIDEO_CAMERA
} from '../constants';
import TransactionsTable from '../../transactions/components/Table';

const { Text } = Typography;
const { confirm } = Modal;
function showConfirm() {
    confirm({
        content: 'Some descriptions',
        onOk() {
        },
        title: 'Campaign Created Successfully',
    });
}
const Dashboard = () => {
    const { overviewPendingCampignNumber,
        overviewApprovedCampignNumber } = useSelector(state => state.overview);
    const { savedLocations } = useSelector(state => state.savedLocation);
    const CLIENT_CARDS = [
        { color: 'green',
            counts: overviewApprovedCampignNumber,
            link: '/dashboard/campaigns',
            type: 'Approved Campaigns' },
        { color: 'yellow',
            counts: overviewPendingCampignNumber,
            link: '/dashboard/campaigns',
            type: 'Pending Approval' },
        { color: 'green',
            counts: savedLocations.length,
            link: '/dashboard/locations',
            type: 'Saved Locations' },
    ];
    return (
        <div className="dashboard-div">
            <Row gutter={48} className="client-card">
                {CLIENT_CARDS.map(({ color, counts, link, type }) => (
                    <Col key={type} span={6}>
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
            <Row className="client-card">
                <Col span={8}>
                    <Card className="dashboard-card">
                        {NEW_CAMPAIGNS}
                        <br />
                        <Icon onClick={showConfirm} type={VIDEO_CAMERA} />
                    </Card>
                </Col>
            </Row>
            <TransactionsTable />
        </div>
    );
};

export default Dashboard;

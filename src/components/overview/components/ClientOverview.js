import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Icon, Typography, Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import {
    NEW_CAMPAIGNS,
    VIDEO_CAMERA
} from '../constants';
import TransactionsTable from '../../transactions/components/Table';

const { Text, Title } = Typography;
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
        {
            color: 'green',
            counts: overviewApprovedCampignNumber,
            link: '/dashboard/campaigns',
            type: 'Approved Campaigns',
        },
        {
            color: 'volcano',
            counts: overviewPendingCampignNumber,
            link: '/dashboard/campaigns',
            type: 'Pending Approval',
        },
        {
            color: 'blue',
            counts: savedLocations.length,
            link: '/dashboard/locations',
            type: 'Saved Locations',
        },
    ];
    const renderCards = () => (CLIENT_CARDS.map(({ counts, color, link, type }) => (
        <Col key={type} sm={24} md={12} lg={8}>
            <NavLink to={link}>
                <Card hoverable className="dashboard-card">
                    <div>
                        <Text
                            type="secondary"
                            style={{
                                fontSize: 16,
                            }}
                        >
                            {type}
                        </Text>
                    </div>
                    <div>
                        <Text
                            type="secondary"
                            style={{
                                fontSize: 36,
                                fontWeight: 700,
                            }}
                        >
                            {counts}
                        </Text>
                    </div>

                </Card>
            </NavLink>
        </Col>
    )));
    return (
        <div className="container">
            <Row
                type="flex"
                justify="space-between"
                gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
                className="mb-2"
            >
                {renderCards()}
            </Row>

            <TransactionsTable />
        </div>
    );
};

export default Dashboard;

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Typography, Card, Col, Row, Spin } from 'antd';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

import TransactionsTable from '../../transactions/components/Table';

const { Title, Text } = Typography;

const Overview = () => {
    const { overviewLocationNumber,
        overviewPendingCampignNumber,
        overviewApprovedCampignNumber, overviewLoading } = useSelector(state => state.overview);
    const { savedLocations } = useSelector(state => state.savedLocation);
    const { user: { isAdmin }, navLoading } = useSelector(state => state.user);
    const checkSavedOrLocations = () => {
        if (!isAdmin) {
            return savedLocations.length;
        }
        if (!overviewLoading) {
            return overviewLocationNumber;
        }
        return 0;
    };
    const CARDS = [
        {
            counts: !overviewLoading ? overviewApprovedCampignNumber : 0,
            link: '/dashboard/campaigns/status/Approved',
            type: 'Approved Campaigns',
        },
        {
            counts: !overviewLoading ? overviewPendingCampignNumber : 0,
            link: '/dashboard/campaigns/status/Pending',
            type: 'Pending Campaigns',
        },
        {
            counts: checkSavedOrLocations(),
            link: !isAdmin ? '/dashboard/savedLocations' : '/dashboard/locations',
            type: !isAdmin ? 'Saved Locations' : 'Available Locations',
        },
    ];

    const renderCards = () => (CARDS.map(({ counts, link, type }) => (
        <Col key={type} sm={24} md={8}>
            <Card hoverable className="dashboard-card">
                <NavLink to={link}>
                    <span>
                        <Text className="text_title" type="secondary" level={4}>
                            {type}
                        </Text>
                    </span>
                    <span>
                        <Title className="text_title" level={1}>
                            {counts}
                        </Title>
                    </span>
                </NavLink>
            </Card>
        </Col>
    )));

    return (
        navLoading ? (<div className='center_loader'>
            <Spin size='large'></Spin>
        </div>) : (
                <>
                    <Row
                        gutter={[{ lg: 32, md: 24, sm: 16, xs: 8 }, 20]}
                        className="mb-4"
                    >
                        {renderCards()}
                    </Row>
                    {!isAdmin ? (<TransactionsTable />)
                        : (
                            <Row gutter={[{ lg: 32, md: 24, sm: 16, xs: 8 }, 20]}>
                                <Col sm={24} lg={12}>
                                    <UnresolvedTickets />
                                </Col>
                                <Col sm={24} lg={12}>
                                    <Tasks />
                                </Col>
                            </Row>
                        )}
                </>
            )
    );
};

export default Overview;

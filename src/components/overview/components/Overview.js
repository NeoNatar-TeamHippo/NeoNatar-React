import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Typography, Card, Col, Row } from 'antd';

import UnresolvedTickets from './UnresolvedTickets';
import Tasks from './Tasks';

import TransactionsTable from '../../transactions/components/Table';

const { Title } = Typography;

const Overview = () => {
    const { overviewLocationNumber,
        overviewPendingCampignNumber,
        overviewApprovedCampignNumber, overviewLoading } = useSelector(state => state.overview);
    const { savedLocations } = useSelector(state => state.savedLocation);
    const { user: { isAdmin } } = useSelector(state => state.user);
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
            link: '/dashboard/campaigns',
            type: 'Approved Campaigns',
        },
        {
            counts: !overviewLoading ? overviewPendingCampignNumber : 0,
            link: '/dashboard/campaigns',
            type: 'Pending Campaigns',
        },
        {
            counts: checkSavedOrLocations(),
            link: !isAdmin ? '/dashboard/savedLocations' : '/dashboard/locations',
            type: !isAdmin ? 'Saved Locations' : 'Locations',
        },
    ];

    const renderCards = () => (CARDS.map(({ counts, link, type }) => (
        <Col key={type} sm={24} md={8}>
            <NavLink to={link}>
                <Card hoverable className="dashboard-card">
                    <div>
                        <Title className="text_title" type="secondary" level={4}>
                            {type}
                        </Title>
                    </div>
                    <div>
                        <Title className="text_title" level={1}>
                            {counts}
                        </Title>
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
        </div>
    );
};

export default Overview;

import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import LocationTable from './Table';
import { ADD_SELECTED, OUR_LOCATION } from '../constants';

const { Title } = Typography;
const Locations = () => (
    <div className="container">
        <Row>
            <Col sm={8} md={6} lg={4}>
                <Title level={4}>
                    {OUR_LOCATION}
                </Title>
            </Col>
            <Col sm={16} md={18} lg={20}>
                <Button className="mb-2" size="default" type="primary">
                    {ADD_SELECTED}
                </Button>
            </Col>
        </Row>
        <LocationTable />
        <Row />
    </div>
);
export default Locations;

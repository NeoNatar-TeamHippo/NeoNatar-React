import React from 'react';
import { Typography, Button, Row, Col, Input } from 'antd';
import LocationTable from './Table';
import { ADD_SELECTED, OUR_LOCATION, SORT, FILTER } from '../constants';

const { Text, Title } = Typography;
const Locations = () => (
    <div className="container">
        <Row>
            <Col span={8}>
                <div className="d-flex justify-content-start">
                    <Title level={4}>
                        {OUR_LOCATION}
                        <Button className="ml-3" size="default" type="primary">
                            {ADD_SELECTED}
                        </Button>
                    </Title>
                </div>
            </Col>
            <Col span={10}>
                {/* <div className="d-flex justify-content-center mt-1">
                    <Input.Search
                        placeholder="Search..."
                    />
                </div> */}
            </Col>
            <Col span={6}>
                <div className="d-flex justify-content-end mt-2">
                    <Text type="warning">{SORT}</Text>
                    <Text type="danger">{FILTER}</Text>
                </div>
            </Col>
        </Row>
        <LocationTable />
        <Row />
    </div>
);
export default Locations;

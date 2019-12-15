import React from 'react';
import { Typography, Button, Row, Col, Input, Icon } from 'antd';
import { ADD_SELECTED, OUR_LOCATION, SORT, FILTER } from '../constants';

const { Text, Title } = Typography;
const Locations = () => (
    <div className="container-fluid">
        <Row>
            <Col span={8}>
                <Title level={4}>
                    {OUR_LOCATION}
                    <Button className="ml-2" type="primary">
                        {ADD_SELECTED}
                    </Button>
                </Title>
            </Col>
            <Col span={8}>
                <Input
                    prefix={<Icon type="search" />}
                    placeholder="Search..."
                />
            </Col>
            <Col span={8}>
                <Text type="warning">{SORT}</Text>
                <Text type="danger">{FILTER}</Text>
            </Col>
        </Row>
    </div>
);
export default Locations;

import React from 'react';
import { Typography, Button, Row, Col, Input, Icon } from 'antd';
const { Text, Title } = Typography;
const Locations = () => {
    return (
        <div className='container-fluid'>
            <Row >
                <Col span={8}>
                    <Title level={4}>
                        Our Locations
                            <Button className='ml-2' type='primary'>
                            Add Selected
                        </Button>
                    </Title>
                </Col>
                <Col span={8}>
                    <Input
                        prefix={<Icon type="search" />}
                        placeholder="Search..."
                    />
                </Col>
                <Col span={8} >
                    <Text type='warning'>Sort</Text> |
                        <Text type='danger'>Filter</Text>
                </Col>
            </Row>
        </div>
    )
}
export default Locations;

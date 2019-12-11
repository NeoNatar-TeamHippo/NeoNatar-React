import React from 'react';
import { Layout, Typography, Button, Row, Col, Input, Icon } from 'antd';
import sideMenu from '../../sideMenu';
const { Text, Title } = Typography;
const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;
const Location = () => {
    return (
        <Layout>
            <Sider>
                <SideMenu />
            </Sider>
            <Content className='container-fluid'>
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
            </Content>
        </Layout>
    )
}
export default Location;

import React from 'react';
import { Modal, Tag, Table, Icon, Input, Badge, Card, Col, Layout, Row } from 'antd';

import { ALL_CAMPAIGNS, CARDS, DATA, NEW_CAMPAIGNS, VIDEO_CAMERA } from '../constants';
import sideMenu from '../../../sideMenu';

const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;
const { Search } = Input;
const { confirm } = Modal;
function showConfirm() {
    confirm({
        content: 'Some descriptions',
        onOk() {
        },
        title: 'Campaign Created Successfully',
    });
}
const Dashboard = () => (
    <Layout>
        <Sider>
            <SideMenu />
        </Sider>
        <Content className="dashboard-content">
            <Row gutter={0}>
                {CARDS.map(({ counts, type }) => (
                    <Col key={type} span={6}>
                        <Badge count={counts}>
                            <Card className="dashboard-card">{type}</Card>
                        </Badge>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col span={8} offset={9}>
                    <Card className="dashboard-card">
                        {NEW_CAMPAIGNS}
                        <br />
                        <Icon onClick={showConfirm} type={VIDEO_CAMERA} />
                    </Card>
                </Col>
            </Row>
            <Table
                dataSource={DATA}
                title={() => (
                    <div>
                        {ALL_CAMPAIGNS}
                        <Search
                            style={{ marginLeft: 100, width: 400 }}
                            placeholder="search campaigns"
                        />
                    </div>
                )}
                bordered
                columns={
                    [
                        {
                            dataIndex: 'sn',
                            key: 'sn',
                            title: 'S/N',
                        },
                        {
                            dataIndex: 'transactionDetails',
                            key: 'transactionDetails',
                            title: 'Transaction Details',
                        },
                        {
                            dataIndex: 'customerName',
                            key: 'customerName',
                            title: 'Customer Name',
                        },
                        {
                            dataIndex: 'cost',
                            key: 'cost',
                            title: 'Cost',
                        },
                        {
                            dataIndex: 'date',
                            key: 'date',
                            title: 'Date',
                        },
                        {
                            dataIndex: 'status',
                            key: 'status',
                            render: status => (
                                <span>
                                    {status.map(tag => {
                                        let color;
                                        if (tag === 'live') {
                                            color = 'green';
                                        } else {
                                            color = 'red';
                                        }
                                        return (
                                            <Tag color={color} key={tag}>
                                                {tag.toUpperCase()}
                                            </Tag>
                                        );
                                    })}
                                </span>
                            ),

                            title: 'Status',
                        },
                    ]
                }
                rowKey={record => record.id}
            />
        </Content>
    </Layout>
);

export default Dashboard;

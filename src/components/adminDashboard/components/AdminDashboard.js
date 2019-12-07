import React from 'react';
import { Tag, Table, Icon, Input, Badge, Card, Col, Layout, Row } from 'antd';

import { ALL_CAMPAIGNS, CARDS, NEW_CAMPAIGNS, VIDEO_CAMERA } from '../constants';
import sideMenu from '../../sideMenu';

const { SideMenu } = sideMenu.components;
const { Content, Sider } = Layout;
const { Search } = Input;
const data = [
    {
        amount: '₦50000000',
        customerName: 'Innoson',
        date: 'May 26, 2019',
        key: '1',
        sn: '1',
        status: ['live'],
        transactionDetails: 'MTN Pulse Dec Promo',
    },
    {
        amount: '₦20000000',
        customerName: 'Aliko Dangote',
        date: 'October 12, 2019',
        key: '2',
        sn: '2',
        status: ['live'],
        transactionDetails: 'MTN Hackathon with CCHub',
    },
    {
        amount: '₦25000000',
        customerName: 'Innoson',
        date: 'November 15, 2019',
        key: '3',
        sn: '3',
        status: ['expired'],
        transactionDetails: 'Wizkid Concert with MTN',
    },
];

const AdminDashboard = () => (
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
                <Col span={8} offset={8}>
                    <Card className="dashboard-card">
                        {NEW_CAMPAIGNS}
                        <br />
                        <Icon type={VIDEO_CAMERA} />
                    </Card>
                </Col>
            </Row>
            <Table
                dataSource={data}
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
                            dataIndex: 'amount',
                            key: 'amount',
                            title: 'Amount',
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

export default AdminDashboard;

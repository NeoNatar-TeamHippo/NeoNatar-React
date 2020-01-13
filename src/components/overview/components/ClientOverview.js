import React from 'react';
import { Modal, Tag, Table, Icon, Input, Typography, Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import {
    ALL_CAMPAIGNS,
    CLIENT_CARDS,
    DATA,
    NEW_CAMPAIGNS,
    VIDEO_CAMERA
} from '../constants';

const { Text } = Typography;
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
    <div className="dashboard-div">
        <Row gutter={48}>
            {CLIENT_CARDS.map(({ color, counts, link, type }) => (
                <Col key={type} span={6}>
                    <NavLink to={link}>
                        <Card hoverable className="dashboard-card">
                            <Text className="notification-card-text">{type}</Text>
                            <br />
                            <Tag class="notification-card-tag" color={color} key={type}>
                                {counts}
                            </Tag>
                        </Card>
                    </NavLink>
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
    </div>
);

export default Dashboard;

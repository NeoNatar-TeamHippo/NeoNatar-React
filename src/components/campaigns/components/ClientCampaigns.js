import React from 'react';
import { Icon, Tag, Input, Table } from 'antd';

import { CLIENT_CAMPAIGNS } from '../constants';

const { Search } = Input;

const ClientCampaigns = () => (
    <Table
        dataSource={CLIENT_CAMPAIGNS}
        title={() => (
            <div>
                All Campaigns 2019
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
                {
                    dataIndex: 'watch',
                    key: 'watch',
                    render: () => (
                        <Icon type="eye" />
                    ),
                    title: '',
                },
            ]
        }
        rowKey={record => record.id}
    />
);

export default ClientCampaigns;

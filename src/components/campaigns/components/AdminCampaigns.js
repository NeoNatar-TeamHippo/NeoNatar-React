import React from 'react';
import { Tag, Table } from 'antd';

import { ADMIN_CAMPAIGNS } from '../constants';

const AdminCampaigns = () => (
    <Table
        dataSource={ADMIN_CAMPAIGNS}
        title={() => 'All Campaigns'}
        bordered
        columns={
            [
                {
                    dataIndex: 'videoDetails',
                    key: 'videoDetails',
                    title: 'Video details',
                },
                {
                    dataIndex: 'category',
                    key: 'category',
                    title: 'Category',
                },
                {
                    dataIndex: 'cost',
                    key: 'cost',
                    title: 'Cost',
                },
                {
                    dataIndex: 'locations',
                    key: 'locations',
                    title: 'Locations',
                },
                {
                    dataIndex: 'status',
                    key: 'status',
                    render: status => (
                        <span>
                            {status.map(tag => {
                                let color;
                                if (tag === 'pending') {
                                    color = 'orange';
                                } else if (tag === 'approved') {
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
);

export default AdminCampaigns;

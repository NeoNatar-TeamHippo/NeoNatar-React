import React from 'react';
import { Checkbox, Tag, Table } from 'antd';

import { DATA } from '../constants';

const AllCampaigns = () => (
    <Table
        dataSource={DATA}
        title={() => 'All Campaigns'}
        bordered
        columns={
            [
                {
                    dataIndex: 'videoDetails',
                    key: 'videoDetails',
                    render: videoDetails => (
                        <span>
                            <Checkbox margin-right={200} />
                            {videoDetails}
                        </span>
                    ),
                    title: 'Video details',
                },
                {
                    dataIndex: 'category',
                    key: 'category',
                    title: 'Category',
                },
                {
                    dataIndex: 'price',
                    key: 'price',
                    title: 'Price',
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
                                    color = 'yellow';
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

export default AllCampaigns;

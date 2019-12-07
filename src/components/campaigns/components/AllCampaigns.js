import React from 'react';
import { Checkbox, Tag, Table } from 'antd';

const data = [
    {
        category: 'Transportation',
        key: '1',
        locations: '10',
        price: 'free',
        status: ['pending'],
        videoDetails: 'The Gods are to be blamed',
    },
    {
        category: 'Science',
        key: '2',
        locations: '5',
        price: '₦2500',
        status: ['approved'],
        videoDetails: 'Saturation Point in Distress',
    },
    {
        category: 'Telecommunication',
        key: '3',
        locations: '100',
        price: '₦50000',
        status: ['deactivated'],
        videoDetails: 'Etisalat Naija We Hail Thee',
    },
];
const AllCampaigns = () => (
    <Table
        dataSource={data}
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

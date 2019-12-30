import React from 'react';
import { Tag, Table, Typography, PageHeader } from 'antd';

import { DATA } from '../constants';

import { renderPrice } from '../../utils/functions';

const { Text } = Typography;

const Campaigns = ({ history }) => (
    <>
        <PageHeader
            onBack={() => history.goBack()}
            title="All Campaigns"
            className="mb-2 page_header"
        />
        <Table
            dataSource={DATA}
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
                        render: cost => {
                            const { type } = renderPrice(cost);
                            return (
                                <Text type={type} style={{ fontFamily: 'monospace' }}>
                                    {cost}
                                </Text>
                            );
                        },
                        title: 'Cost(₦)',
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
    </>
);

export default Campaigns;

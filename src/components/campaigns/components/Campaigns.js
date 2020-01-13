import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tag, Table } from 'antd';

import { getCampaigns } from '../actions';
import { statusColor } from '../../utils/functions';

const Campaigns = ({ history }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCampaigns());
    }, [dispatch]);

    const { campaigns } = useSelector(state => state.campaigns);

    const handleViewCampaign = campaignId => {
        history.push(`/dashboard/campaigns/${campaignId}`);
    };

    const columns = [
        {
            dataIndex: 'title',
            key: 'title',
            title: 'Video details',
        },
        {
            dataIndex: 'customerName',
            key: 'customerName',
            title: 'Customer Name',
        },
        {
            dataIndex: 'amount',
            key: 'amount',
            render: amount => (
                <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
                    {amount}
                </div>
            ),

            title: 'Amount(₦)',
        },
        {
            dataIndex: 'numberOfLocations',
            key: 'numberOfLocations',
            render: numberOfLocations => (
                <div style={{ fontFamily: 'monospace', textAlign: 'center' }}>
                    {numberOfLocations}
                </div>
            ),
            title: 'Locations',
        },
        {
            dataIndex: 'status',
            key: 'status',
            render: status => {
                const color = statusColor(status);
                return (
                    <Tag color={color} key={status}>
                        {status.toUpperCase()}
                    </Tag>
                );
            },
            title: 'Status',
        },
    ];

    return (
        <Table
            dataSource={campaigns}
            title={() => 'All Campaigns'}
            columns={columns}
            rowKey={record => record.id}
            onRow={record => ({
                onClick: () => {
                    handleViewCampaign(record.campaignId);
                },
            })}
        />
    );
};

export default Campaigns;

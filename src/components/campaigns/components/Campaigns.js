import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tag, Table, PageHeader, Menu, Typography } from 'antd';

import { getCampaigns } from '../actions';
import { ALLCAMPAIGNS, ALL, PENDING, APPROVE, HORIZONTAL } from '../constants';
import { statusColor } from '../../utils/functions';

const menuItems = [ALL, PENDING, APPROVE];

const Campaigns = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampaigns());
    }, [dispatch]);

    const { campaigns } = useSelector(state => state.campaigns);
    const [campaignData, setCampaignData] = useState(campaigns);
    useEffect(() => {
        setCampaignData(campaigns);
    }, [campaigns]);

    const handleViewCampaign = campaignId => {
        history.push(`/dashboard/campaigns/${campaignId}`);
    };

    const handleChangeTab = ({ key }) => {
        switch (key) {
            case ALL:
                setCampaignData(campaigns);
                break;
            case PENDING:
                setCampaignData(campaigns.filter(campaign => campaign.status === 'pending'));
                break;
            case APPROVE:
                setCampaignData(campaigns.filter(campaign => campaign.status === 'live'));
                break;
            default:
                setCampaignData(campaigns);
                break;
        }
    };

    const columns = [
        {
            dataIndex: 'title',
            key: 'title',
            title: 'Video Title',
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
                <Typography.Text>
                    {`₦ ${amount}`}
                </Typography.Text>
            ),
            title: 'Amount',
            width: 120,
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
            width: 120,
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
        <div>
            <PageHeader
                onBack={() => history.goBack()}
                title={ALLCAMPAIGNS}
                className="mb-2 page_header"
            />
            <Menu
                mode={HORIZONTAL}
                onClick={handleChangeTab}
                defaultSelectedKeys={[ALL]}
            >
                {
                            menuItems.map(key => (
                                <Menu.Item key={key}>
                                    {key}
                                </Menu.Item>
                            ))
                        }
            </Menu>
            <Table
                dataSource={campaignData}
                columns={columns}
                rowKey={record => record.id}
                onRow={record => ({
                    onClick: () => {
                        handleViewCampaign(record.campaignId);
                    },
                })}
            />
        </div>
    );
};

export default Campaigns;


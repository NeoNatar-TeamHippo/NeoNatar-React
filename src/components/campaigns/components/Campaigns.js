import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tag, Table, PageHeader, Menu, Typography, Tooltip, Button } from 'antd';

import { getCampaigns } from '../actions';
import { ALLCAMPAIGNS, ALL, PENDING, APPROVE, HORIZONTAL, DISAPPROVED } from '../constants';
import { statusColor } from '../../utils/functions';

const menuItems = [ALL, PENDING, APPROVE, DISAPPROVED];

const Campaigns = ({ history }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampaigns());
    }, [dispatch]);

    const { campaigns, campaignsLoading } = useSelector(state => state.campaigns);
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
            case DISAPPROVED:
                setCampaignData(campaigns.filter(campaign => campaign.status === 'disapproved'));
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
            align: 'right',
            dataIndex: 'amount',
            key: 'amount',
            render: amount => (
                <Typography.Text>
                    {`₦ ${amount}`}
                </Typography.Text>
            ),
            title: 'Amount',
        },
        {
            align: 'right',
            dataIndex: 'numberOfLocations',
            key: 'numberOfLocations',
            render: numberOfLocations => (
                <div>
                    <Typography.Text>
                        {numberOfLocations}
                    </Typography.Text>
                </div>
            ),
            title: 'Locations',
        },
        {
            align: 'right',
            dataIndex: 'duration',
            key: 'duration',
            render: duration => (
                <div>
                    <Typography.Text>
                        {duration}
                    </Typography.Text>
                </div>
            ),
            title: 'Duration',
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
        {
            key: 'action',
            render: (text, record) => (
                <Tooltip placement="top" title="View Campaign">
                    <Button
                        onClick={() => handleViewCampaign(record.campaignId)}
                        type="link"
                        icon="eye"
                    />
                </Tooltip>
            ),
            title: 'Action',
        },
    ];

    return (
        <div>
            <PageHeader
                title={ALLCAMPAIGNS}
                className="mb-2 page_header"
            />
            <Menu
                mode={HORIZONTAL}
                onClick={handleChangeTab}
                defaultSelectedKeys={[ALL]}
                style={{ marginBottom: 5 }}
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
                loading={campaignsLoading}
                dataSource={campaignData}
                columns={columns}
                rowKey={record => record.id}
            />
        </div>
    );
};

export default Campaigns;


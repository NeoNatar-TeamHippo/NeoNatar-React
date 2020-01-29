import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tag, Table, Menu, Typography, Tooltip, Button } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import { getCampaigns } from '../actions';
import { ALL, PENDING, APPROVE, HORIZONTAL, NAIRASIGN, DISAPPROVED } from '../constants';
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
            align: 'left',
            dataIndex: 'title',
            key: 'title',
            title: 'Video Title',
        },
        {
            align: 'left',
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
                    <span className="mr-1">
                        {ReactHtmlParser(NAIRASIGN)}
                    </span>
                    {amount}
                </Typography.Text>
            ),
            title: 'Amount',
        },
        {
            align: 'center',
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
            align: 'center',
            dataIndex: 'duration',
            key: 'duration',
            render: duration => (
                <div>
                    <Typography.Text>
                        {duration}
                    </Typography.Text>
                </div>
            ),
            title: 'Duration(days)',
        },
        {
            align: 'center',
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
            align: 'center',
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
        <>
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
                size="middle"
                scroll={{ y: 400 }}
            />
        </>
    );
};

export default Campaigns;

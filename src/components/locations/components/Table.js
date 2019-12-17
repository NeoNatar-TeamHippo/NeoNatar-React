import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Button, Tag, Typography, Divider, Tooltip } from 'antd';
import { RELOAD } from '../constants';
import { renderRateFormat } from '../../utils/functions';

const LocationTable = ({ history }) => {
    const { locations, locationLoading } = useSelector(state => state.location);
    const [loading, setLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const handleViewLocation = locationId => {
        history.push(`/dashboard/locations/${locationId}`);
    };
    const addToSavedLocation = locationId => {
        console.log(locationId, 'handle savedLocation');
    };
    const columns = [
        {
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
        },
        {
            dataIndex: 'address',
            key: 'address',
            title: 'Address',
        },
        {
            dataIndex: 'state',
            key: 'state',
            title: 'State',
        },
        {
            dataIndex: 'lga',
            key: 'lga',
            title: 'Local Govt',
        },
        {
            dataIndex: 'price',
            key: 'price',
            render: text => {
                let type;
                if (parseInt(text, 10) <= 200) {
                    type = 'danger';
                } else if (parseInt(text, 10) <= 500) {
                    type = 'warning';
                } else {
                    type = 'secondary';
                }
                return (
                    <Typography.Text type={type}>
                        {text}
                    </Typography.Text>
                );
            },
            title: 'Price',
        },
        {
            dataIndex: 'trafficRate',
            key: 'trafficRate',
            render: text => {
                const { color, rateText } = renderRateFormat(text);
                return (
                    <Tag color={color}>
                        {rateText}
                    </Tag>
                );
            },
            title: 'Traffic Rate',
        },
        {
            key: 'action',
            render: (text, record) => (
                <div>
                    <Tooltip placement="top" title="View details">
                        <Button
                            onClick={() => { handleViewLocation(record.locationId); }}
                            type="link"
                            icon="eye"
                        />
                    </Tooltip>
                    <Divider type="vertical" />
                    <Tooltip placement="top" title="Add to saved location">
                        <Button
                            onClick={() => { addToSavedLocation(record.locationId); }}
                            className="text-success"
                            type="link"
                            icon="plus"
                        />
                    </Tooltip>
                </div>
            ),
            title: 'Action',
        },
    ];
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = selectedKeys => {
        console.log('selectedRowKeys changed: ', selectedKeys);
        setSelectedRowKeys(selectedKeys);
    };
    const rowSelection = {
        onChange: onSelectChange,
        selectedRowKeys,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    {RELOAD}
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table
                loading={locationLoading}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={locations}
            />
        </div>
    );
};
export default withRouter(LocationTable);

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tag, Typography, Dropdown, Icon, Menu, Divider, Tooltip } from 'antd';
import { RELOAD } from '../constants';
import { getLocations } from '../actions';

const LocationTable = () => {
    const dispatch = useDispatch();
    const { location, locationLoading } = useSelector(state => state.location);
    console.log(location, 'from tables');
    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);
    const [loading, setLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const handleMenuClick = e => {
        console.log('click', e);
    };
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                <Tooltip placement="leftTop" title="View details">
                    <Button type="link" icon="eye" />
                </Tooltip>
            </Menu.Item>
            <Menu.Item key="2">
                <Tooltip placement="leftTop" title="Add to saved location">
                    <Button className="text-success" type="link" icon="plus" />
                </Tooltip>
            </Menu.Item>
        </Menu>
    );
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
                let color;
                if (parseInt(text, 10) <= 200) {
                    color = 'volcano';
                } else if (parseInt(text, 10) <= 500) {
                    color = 'orange';
                } else {
                    color = 'green';
                }
                return (
                    <Tag color={color}>
                        {text}
                    </Tag>
                );
            },
            title: 'Traffic Rate',
        },
        {
            key: 'action',
            render: (text, record) => (
                <div>
                    <Dropdown overlay={menu}>
                        <Button size="large" type="link" icon="more" />
                    </Dropdown>
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
                // loading={locationLoading}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={location}
            />
        </div>
    );
};
export default LocationTable;

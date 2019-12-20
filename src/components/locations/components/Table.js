import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Button, Tag, Typography, Divider, Tooltip, Menu, Dropdown, Icon } from 'antd';
import { RELOAD, ADD_SELECTED, NO_SAVED_LOCATION, TABLE_VALUES } from '../constants';
import { renderRateFormat, renderPrice, openNotification } from '../../utils/functions';
import { locationOperation } from '../../savedLocations/actions';

const LocationTable = ({ history }) => {
    const dispatch = useDispatch();
    const { locations } = useSelector(state => state.location);
    const { savedLocations } = useSelector(state => state.savedLocation);
    const [loading, setLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [locationToAdd, setlocationToAdd] = useState(null);
    const noSavedLoc = savedLocations.length === 0;
    const addBulkState = savedLocationId => {
        const payload = {
            locations: selectedRowKeys,
            queryType: 'add',
            savedLocationId,
        };
        dispatch(locationOperation(payload));
        openNotification(
            `${selectedRowKeys.length} Location${selectedRowKeys.length > 1 ? 's' : ''}`,
            'Successfully added'
        );
    };
    const addSingleState = savedLocationId => {
        const payload = {
            locations: [locationToAdd],
            queryType: 'add',
            savedLocationId,
        };
        dispatch(locationOperation(payload));
        openNotification('Location added', 'Success');
    };
    const handleMenuClick2 = ({ key }) => {
        addBulkState(key);
    };
    const handleMenuClick = ({ key }) => {
        addSingleState(key);
    };
    const renderMenu = () => {
        let menuItem = '';
        if (!noSavedLoc) {
            menuItem = savedLocations.map(savedLoc => (
                <Menu.Item key={savedLoc.savedLocationId}>
                    {savedLoc.title}
                </Menu.Item>
            ));
        } else {
            menuItem = (
                <Menu.Item disabled>
                    {NO_SAVED_LOCATION}
                </Menu.Item>
            );
        }
        return menuItem;
    };
    const menu = (
        <Menu onClick={handleMenuClick}>
            {renderMenu()}
        </Menu>
    );
    const menu2 = (
        <Menu onClick={handleMenuClick2}>
            {renderMenu()}
        </Menu>
    );
    const handleViewLocation = locationId => {
        history.push(`/dashboard/locations/${locationId}`);
    };
    const addToSavedLocation = locationId => {
        setlocationToAdd(locationId);
    };
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1500);
    };

    const onSelectChange = selectedKeys => {
        setSelectedRowKeys(selectedKeys);
    };
    const rowSelection = {
        onChange: onSelectChange,
        selectedRowKeys,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
        ...TABLE_VALUES,
        {
            dataIndex: 'price',
            key: 'price',
            render: text => {
                const { type } = renderPrice(text);
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
                        <Dropdown disabled={noSavedLoc} overlay={menu}>
                            <Button
                                onMouseOver={() => { addToSavedLocation(record.locationId); }}
                                onFocus={() => { addToSavedLocation(record.locationId); }}
                                className="text-success"
                                type="link"
                                icon="plus"
                                disabled={noSavedLoc}
                            />
                        </Dropdown>
                    </Tooltip>
                </div>
            ),
            title: 'Action',
        },
    ];
    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <Button type="ghost" onClick={start} disabled={!hasSelected} loading={loading}>
                    {RELOAD}
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
                <Dropdown disabled={noSavedLoc || !hasSelected} overlay={menu2}>
                    <Button
                        className="ml-2"
                        size="default"
                        type="primary"
                        disabled={noSavedLoc}
                    >
                        {ADD_SELECTED}
                        <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={locations}
                rowKey={record => record.locationId}
            />
        </>
    );
};
export default withRouter(LocationTable);

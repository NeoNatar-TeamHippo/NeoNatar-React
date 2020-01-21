/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Table, Button, Tag, Typography, Divider, Tooltip, Menu, Dropdown,
    Icon, Input
} from 'antd';
import Highlighter from 'react-highlight-words';
import { ADD_SELECTED, NO_SAVED_LOCATION, NEW_LOCATION, SEARCH, RESET } from '../constants';
import { renderRateFormat, openNotification } from '../../utils/functions';
import { locationOperation, getSavedLocations } from '../../savedLocations/actions';

const LocationTable = ({ history }) => {
    const dispatch = useDispatch();

    const { locations } = useSelector(state => state.location);
    const { user: { isAdmin, userId } } = useSelector(state => state.user);
    const { savedLocations } = useSelector(state => state.savedLocation);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [locationToAdd, setlocationToAdd] = useState(null);
    const [searchText, setsearchText] = useState('');
    const [searchedColumn, setsearchedColumn] = useState('');
    useEffect(() => {
        dispatch(getSavedLocations({ userId }));
    }, [dispatch, userId]);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setsearchText(selectedKeys[0]);
        setsearchedColumn(dataIndex);
    };
    const handleReset = clearFilters => {
        clearFilters();
        setsearchText('');
    };
    const searchKeyText = dataIndex => `Search ${dataIndex}`;
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input.Search
                    placeholder={searchKeyText(dataIndex)}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ display: 'block', marginBottom: 8, width: 188 }}
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{ marginRight: 8, width: 90 }}
                >
                    {SEARCH}
                </Button>
                <Button
                    onClick={() => handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    {RESET}
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) => record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                console.log(visible);
                // setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ) : (text)),
    });

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
            'Successfully added', 'success'
        );
    };
    const handleNewLocation = () => {
        history.push('/dashboard/locations/new');
    };
    const addSingleState = savedLocationId => {
        const payload = {
            locations: [locationToAdd],
            queryType: 'add',
            savedLocationId,
        };
        dispatch(locationOperation(payload));
        openNotification('Location added', 'Success', 'success');
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
    const onSelectChange = selectedKeys => {
        setSelectedRowKeys(selectedKeys);
    };
    const rowSelection = {
        onChange: onSelectChange,
        selectedRowKeys,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
        {
            align: 'left',
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
        },
        {
            align: 'left',
            dataIndex: 'address',
            key: 'address',
            title: 'Address',
            width: '25%',
            ...getColumnSearchProps('address'),
        },
        {
            align: 'left',
            dataIndex: 'lga',
            key: 'lga',
            title: 'Local Govt',
            ...getColumnSearchProps('lga'),
        },
        {
            align: 'center',
            dataIndex: 'state',
            key: 'state',
            title: 'State',
            ...getColumnSearchProps('state'),
        },
        {
            align: 'right',
            dataIndex: 'price',
            key: 'price',
            render: text => (
                <Typography.Text type="secondary">
                    <span className="mr-1">&#8358;</span>
                    {text}
                </Typography.Text>
            ),
            title: 'Price/day',
        },
        {
            align: 'center',
            dataIndex: 'trafficRate',
            key: 'trafficRate',
            render: text => (
                <Typography.Text>
                    {text}
                </Typography.Text>
            ),
            title: 'Avg Visitors/week',
        },
        {
            align: 'center',
            key: 'action',
            render: (text, record) => (
                <div className="d-flex justify-content-around">
                    <>
                        <Tooltip placement="top" title="View details">
                            <Button
                                onClick={() => { handleViewLocation(record.locationId); }}
                                type="link"
                                icon="eye"
                            />
                        </Tooltip>
                    </>
                    <div hidden={isAdmin}>
                        <Divider type="vertical" />
                    </div>
                    <div hidden={isAdmin}>
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
                </div>
            ),
            title: 'Action',
        },
    ];
    return (
        <>
            <div className="d-flex justify-content-between">
                <div hidden={isAdmin}>
                    <Dropdown disabled={noSavedLoc || !hasSelected} overlay={menu2}>
                        <Button
                            className="my-2"
                            size="default"
                            type="primary"
                            disabled={noSavedLoc}
                        >
                            {ADD_SELECTED}
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <span className="ml-3">
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Button
                    className="my-2"
                    type="primary"
                    icon="plus"
                    hidden={!isAdmin}
                    onClick={() => handleNewLocation()}
                >
                    {NEW_LOCATION}
                </Button>
            </div>
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={locations}
                rowKey={record => record.locationId}
                size="middle"
                scroll={{ y: 300 }}
            />
        </>
    );
};
export default withRouter(LocationTable);

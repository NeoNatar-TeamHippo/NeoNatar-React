import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Highlighter from 'react-highlight-words';
import ReactHtmlParser from 'react-html-parser';
import { Select, Button, Tabs, List, Table, Typography, Col, Row, Input, Icon } from 'antd';

import { setCampaignLocation, next, setAmount, previous as prev } from '../actions';
import {
    TOTAL,
    PROCEED,
    SELECT_A_LOCATION,
    PREVIOUS,
    CHOOSE_SAVED_LOCATION,
    SEARCH,
    RESET,
    NAIRASIGN
} from '../constants';

const { TabPane } = Tabs;
const { Option } = Select;
const SelectLocation = () => {
    const dispatch = useDispatch();
    const { savedLocations } = useSelector(state => state.savedLocation);
    const { locations } = useSelector(state => state.location);
    const [formLocations, setformLocations] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchText, setsearchText] = useState('');
    const [searchedColumn, setsearchedColumn] = useState('');
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
    const calculateAmount = () => {
        const amounts = [];
        locations.forEach(location => {
            selectedRowKeys.forEach(rowKey => {
                if (location.locationId === rowKey) {
                    amounts.push(parseInt(location.price, 10));
                }
            });
        });
        const total = amounts.reduce((acc, cur) => acc + cur);
        dispatch(setAmount(total));

        return (
            <span>
                {TOTAL}
                <span className="ml-1">{ReactHtmlParser(NAIRASIGN)}</span>
                <span className="total_text">{total}</span>
            </span>
        );
    };
    const onSelectChange = selectedKeys => {
        setSelectedRowKeys(selectedKeys);
    };
    const rowSelection = {
        onChange: onSelectChange,
        selectedRowKeys,
    };
    const onChange = value => {
        setformLocations(value);
    };

    const onBlur = () => {
        console.log('blur');
    };

    const onFocus = () => {
        console.log('focus');
    };

    const onSearch = val => {
        console.log('search:', val);
    };
    const callback = key => {
        console.log(key);
        if (key === '1') {
            setSelectedRowKeys([]);
        }
    };
    const renderformLocations = () => {
        const savedLocationsitem = [];
        const amount = [];
        formLocations.map(locationId => locations.map(location => {
            if (location.locationId === locationId) {
                savedLocationsitem.push(location);
                amount.push(parseInt(location.price, 10));
            }

            return true;
        }));
        const total = amount.reduce((acc, curr) => acc + curr);
        dispatch(setAmount(total));

        return (
            <List
                itemLayout="horizontal"
                dataSource={savedLocationsitem}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description={item.state}
                        />
                    </List.Item>
                )}
            />
        );
    };
    const rendersavedLocations = () => savedLocations.map(savedLocation => (
        <Option key={savedLocation.savedLocationId} value={savedLocation.locations}>
            {savedLocation.locations && savedLocation.locations.length !== 0 ? (
                <div className="d-flex justify-content-between">
                    <Typography.Text>{savedLocation.title}</Typography.Text>
                    <Typography.Text className="ml-2" type="secondary">
                        {savedLocation.locations ? savedLocation.locations.length : 0}
                    </Typography.Text>
                </div>
            ) : ''}
        </Option>
    ));
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
        {
            align: 'center',
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
        },
        {
            align: 'center',
            dataIndex: 'address',
            key: 'address',
            title: 'Address',
            width: '25%',
            ...getColumnSearchProps('address'),
        },
        {
            align: 'center',
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
                    <span>{ReactHtmlParser(NAIRASIGN)}</span>
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
    ];
    const handleProceed = type => {
        if (type === 'locations') {
            dispatch(setCampaignLocation(selectedRowKeys));
        } else {
            dispatch(setCampaignLocation(formLocations));
        }
        dispatch(next());
    };

    return (
        <div className="my-4">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Locations" key="1">
                    <span className="">
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={locations}
                        rowKey={record => record.locationId}
                        size="middle"
                        scroll={{ x: 2000, y: 250 }}
                    />
                    <div className="d-flex justify-content-end">
                        {!hasSelected ? (
                            <Typography.Text type="danger" strong>
                                {SELECT_A_LOCATION}
                            </Typography.Text>
                        )
                            : (
                                <div>
                                    <Typography.Title type="secondary" level={4}>
                                        {hasSelected ? calculateAmount() : ''}
                                    </Typography.Title>
                                </div>
                            )}
                    </div>
                    <div className="my-2 d-flex justify-content-between">
                        <Button onClick={() => dispatch(prev())}>
                            {PREVIOUS}
                        </Button>
                        <Button
                            type="primary"
                            disabled={!hasSelected}
                            onClick={() => handleProceed('locations')}
                        >
                            {PROCEED}
                        </Button>
                    </div>
                </TabPane>
                {savedLocations.length > 0 && (
                    <TabPane tab="Saved Locations" key="2">
                        <Row type="flex" justify="start" gutter={16}>
                            <Col xs={18} md={12} lg={8}>
                                <div className="mt-4">
                                    <Typography.Text strong>
                                        {CHOOSE_SAVED_LOCATION}
                                    </Typography.Text>
                                    <Select
                                        showSearch
                                        className="w-100 mt-4"
                                        placeholder="Select A Saved Location"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) => option.props.children
                                            .toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {rendersavedLocations()}
                                    </Select>
                                </div>
                                {formLocations.length !== 0 ? (
                                    <div className="my-2 d-flex justify-content-between">
                                        <Button onClick={() => dispatch(prev())}>
                                            {PREVIOUS}
                                        </Button>
                                        <Button
                                            type="primary"
                                            onClick={() => handleProceed('savedLocations')}
                                        >
                                            {PROCEED}
                                        </Button>

                                    </div>
                                ) : ''}
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                {formLocations.length !== 0 ? (
                                    renderformLocations()
                                ) : ''}
                            </Col>
                        </Row>
                    </TabPane>
                )}
            </Tabs>
        </div>
    );
};

export default SelectLocation;

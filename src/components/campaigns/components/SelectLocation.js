import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Button, Tabs, List, Table, Typography, Tag, Col, Row } from 'antd';
import { renderRateFormat, renderPrice } from '../../utils/functions';
import { setCampaignLocation, next, setAmount } from '../actions';
import {
    TABLE_VALUES, TOTAL, NAIRASIGN, PROCEED, SELECT_A_LOCATION,
    CHOOSE_SAVED_LOCATION
} from '../constants';

const { TabPane } = Tabs;
const { Option } = Select;
const SelectLocation = () => {
    const dispatch = useDispatch();
    const { savedLocations } = useSelector(state => state.savedLocation);
    const { locations } = useSelector(state => state.location);
    const [formLocations, setformLocations] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
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
                {NAIRASIGN}
                {total}
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
            <div className="d-flex justify-content-between">
                <Typography.Text>{savedLocation.title}</Typography.Text>
                <Typography.Text className="ml-2" type="secondary">
                    {savedLocation.locations ? savedLocation.locations.length : 0}
                </Typography.Text>
            </div>
        </Option>
    ));
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
                    <div className="d-flex justify-content-between">
                        <div className="my-1">
                            <span className="ml-2">
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                            <Button
                                className="ml-4"
                                type="primary"
                                disabled={!hasSelected}
                                onClick={() => handleProceed('locations')}
                            >
                                {PROCEED}
                            </Button>
                        </div>
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
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={locations}
                        rowKey={record => record.locationId}
                    />
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
                                    <Button
                                        className="mt-4"
                                        type="primary"
                                        onClick={() => handleProceed('savedLocations')}
                                    >
                                        {PROCEED}
                                    </Button>
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

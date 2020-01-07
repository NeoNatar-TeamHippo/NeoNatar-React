import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select, Button, Tabs, List, Table, Typography, Tag, Col, Row } from 'antd';
import { renderRateFormat, renderPrice, openNotification } from '../../utils/functions';
import { setCampaignLocation, next, setAmount } from "../actions";
import { TABLE_VALUES } from '../constants'
const { TabPane } = Tabs;
const { Option } = Select;
const SelectLocation = () => {
    const dispatch = useDispatch();
    const { savedLocations } = useSelector(state => state.savedLocation);
    const { locations } = useSelector(state => state.location);
    const [loading, setLoading] = useState(false);
    const [formLocations, setformLocations] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const calculateAmount = () => {
        const amounts = [];
        locations.forEach((location) => {
            selectedRowKeys.forEach((rowKey) => {
                if (location.locationId === rowKey) {
                    amounts.push(parseInt(location.price, 10))
                }
            })
        })
        const total = amounts.reduce((acc, cur) => acc + cur);
        dispatch(setAmount(total));
        return (<><span>Total:</span> <span> &#8358;</span>{total}</>);
    }
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 200);
    };

    const onSelectChange = selectedKeys => {
        setSelectedRowKeys(selectedKeys);
    };
    const rowSelection = {
        onChange: onSelectChange,
        selectedRowKeys,
    };
    const onChange = (value) => {
        setformLocations(value);
    }

    const onBlur = () => {
        console.log('blur');
    }

    const onFocus = () => {
        console.log('focus');
    }

    const onSearch = (val) => {
        console.log('search:', val);
    }
    const callback = (key) => {
        console.log(key);
        if (key === '1') {
            setSelectedRowKeys([]);
        }
    }
    const renderformLocations = () => {
        const savedLocationsitem = [];
        const amount = [];
        formLocations.map(locationId => {
            return locations.map(location => {
                if (location.locationId === locationId) {
                    savedLocationsitem.push(location)
                    amount.push(parseInt(location.price));
                }
            })
        });
        const total = amount.reduce((acc, curr) => acc + curr);
        dispatch(setAmount(total));
        return (<List
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
        />)
    }
    const rendersavedLocations = () => {
        return savedLocations.map((savedLocation, index) => {
            return (<Option key={index} value={savedLocation.locations}>
                <div className='d-flex justify-content-between'>
                    <Typography.Text>{savedLocation.title}</Typography.Text>
                    <Typography.Text className='ml-2' type='secondary'>
                        {savedLocation.locations ? savedLocation.locations.length : 0}
                    </Typography.Text>
                </div>
            </Option>)
        })
    }
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
    const handleProceed = (type) => {
        type === 'locations' ? dispatch(setCampaignLocation(selectedRowKeys))
            : dispatch(setCampaignLocation(formLocations));
        dispatch(next());
    }
    return (
        <div className="my-4">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Locations" key="1">
                    <div className="d-flex justify-content-between">
                        <div>
                            <Button className='mb-1'
                                type="ghost" onClick={start}
                                disabled={!hasSelected} loading={loading}>
                                reload
                        </Button>
                            <span className='mb-1 ml-2'>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                            <Button className='ml-4 mb-1' type='primary' disabled={!hasSelected}
                                onClick={() => handleProceed('locations')}
                            >
                                Proceed
                            </Button>
                        </div>
                        {!hasSelected ? (<Typography.Text type='danger' strong>Please select locations to get a total</Typography.Text>)
                            : (<div>
                                <Typography.Title type='secondary' level={4}>
                                    {hasSelected ? calculateAmount() : ''}
                                </Typography.Title>
                            </div>)}
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
                                <div className='mt-4'>
                                    <Typography.Text strong >
                                        Choose from saved location
                            </Typography.Text>
                                    <Select
                                        showSearch
                                        className='w-100 mt-4'
                                        placeholder="Select A Saved Location"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {rendersavedLocations()}
                                    </Select>
                                </div>
                                {formLocations.length !== 0 ? (
                                    <Button className='mt-4' type='primary'
                                        onClick={() => handleProceed('savedLocations')}>
                                        Proceed
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
    )
}

export default SelectLocation;

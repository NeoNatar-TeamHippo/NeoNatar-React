import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Table, Button, Tag, Typography, Icon, Divider,
    Tooltip, Modal, Card, Avatar, Carousel
} from 'antd';
import { RELOAD, FILTER } from '../constants';
import { getLocations, getLocationsByID } from '../actions';

const { Meta } = Card;

const LocationTable = ({ history }) => {
    const dispatch = useDispatch();
    const { location, locationLoading } = useSelector(state => state.location);
    console.log(location, 'from tables');
    // useEffect(() => {
    //     dispatch(getLocations());
    // }, [dispatch]);
    const [loading, setLoading] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const handleViewLocation = locationId => {
        console.log(locationId, 'handle view');
        dispatch(getLocationsByID(locationId));
        setViewModal(true);
        // setTimeout(() => {
        //     history.push(`/dashboard/location/${locationId}`)
        // }, 2000);
    };
    const addToSavedLocation = locationId => {
        console.log(locationId, 'handle savedLocation');
    };
    const handleLocationData = () => {
        console.log('handled it');
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
            <Modal
                title="Golden Hills"
                centered
                visible={viewModal}
                onOk={() => handleLocationData()}
                onCancel={() => setViewModal(false)}
            >
                <Card
                    style={{ width: '100%' }}
                    cover={(
                        <Carousel autoplay>
                            <div>
                                <h3>{RELOAD}</h3>
                            </div>
                            <div>
                                <h3>{FILTER}</h3>
                            </div>
                            <div>
                                <h3>{RELOAD}</h3>
                            </div>
                            <div>
                                <h3>{FILTER}</h3>
                            </div>
                        </Carousel>
                    )}
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Golden Hills"
                        description="Plot 436 arab road kubwa"
                    />
                </Card>
            </Modal>
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

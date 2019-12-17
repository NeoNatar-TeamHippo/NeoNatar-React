import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { List, Tooltip, Button, Tag, Typography, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { PRICE, TRAFFIC_RATE } from '../constants';
import { deleteSavedLocationByID } from '../actions';
import { renderRateFormat, renderPrice } from '../../utils/functions';

const { confirm } = Modal;
const LocationList = ({ history }) => {
    const dispatch = useDispatch();
    const { savedLocationById, savedLocationLoading } = useSelector(state => state.savedLocation);
    const renderPathUrl = locationId => `/dashboard/Locations/${locationId}`;
    const { locations } = savedLocationById;
    const listData = locations;
    const viewSavedLocation = locationId => {
        history.push(renderPathUrl(locationId));
    };
    const showConfirm = locationId => {
        confirm({
            cancelText: 'No',
            content: 'It can not be reversed, do you wish to proceed?',
            okText: 'Yes',
            okType: 'danger',
            onCancel() { },
            onOk() {
                console.log('okay to delete');
                // dispatch(deleteSavedLocationByID(locationId));
            },
            title: 'Do you want to delete this location?',
        });
    };
    const deleteSavedLocation = locationId => {
        showConfirm(locationId);
    };
    const renderTag = text => {
        const { color, rateText } = renderRateFormat(text);
        return (
            <Tag color={color}>
                {rateText}
            </Tag>
        );
    };
    const renderText = text => {
        const { type } = renderPrice(text);
        return (
            <Typography.Text type={type}>
                {text}
            </Typography.Text>
        );
    };
    return (
        <List
            // loading={savedLocationLoading}
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <Tooltip placement="top" title="View details" key="list-vertical-eye-o">
                            <Button
                                onClick={() => viewSavedLocation(item.locationId)}
                                type="link"
                                icon="eye-o"
                            />
                        </Tooltip>,
                        <Tooltip placement="top" title="Delete" key="list-vertical-delete-o">
                            <Button
                                onClick={() => deleteSavedLocation(item.locationId)}
                                type="link"
                                icon="delete-o"
                                className="text-danger"
                            />
                        </Tooltip>,
                    ]}
                    extra={(
                        <div className="d-flex justify-content-between">
                            <div className="mr-3">
                                <Typography.Text type="secondary">
                                    {PRICE}
                                </Typography.Text>
                                {renderText(item.price)}
                            </div>
                            <div>
                                <Typography.Text type="secondary">
                                    {TRAFFIC_RATE}
                                </Typography.Text>
                                {renderTag(item.trafficRate)}
                            </div>
                        </div>
                    )}
                >
                    <List.Item.Meta
                        title={(
                            <Link to={renderPathUrl(item.locationId)}>
                                {item.name}
                            </Link>
                        )}
                        description={item.address}
                    />
                </List.Item>
            )}
        />
    );
};
export default withRouter(LocationList);

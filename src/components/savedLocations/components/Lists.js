import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { List, Tooltip, Button, Tag, Typography, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { LOCATION_NUMBER_LABEL } from '../constants';
import { deleteSavedLocationByID } from '../actions';

import { openNotification } from '../../utils/functions';

const { confirm } = Modal;
const Lists = ({ history }) => {
    const dispatch = useDispatch();
    const { savedLocations } = useSelector(state => state.savedLocation);
    const renderPathUrl = savedLocationId => `/dashboard/savedLocations/${savedLocationId}`;
    const listData = savedLocations;
    const viewSavedLocation = savedLocationId => {
        history.push(renderPathUrl(savedLocationId));
    };
    const showConfirm = savedLocationId => {
        confirm({
            cancelText: 'No',
            content: 'It can not be reversed, do you wish to proceed?',
            okText: 'Yes',
            okType: 'danger',
            onCancel() { },
            onOk() {
                dispatch(deleteSavedLocationByID(savedLocationId));
                setTimeout(() => {
                    openNotification('Deleted Successfully', 'Saved List', 'success');
                }, 3000);
            },
            title: 'Do you want to delete this List of Saved Location?',
        });
    };
    const deleteSavedLocation = savedLocationId => {
        showConfirm(savedLocationId);
    };
    const editSavedLocation = savedLocationId => {
        console.log(savedLocationId);
    };

    return (
        <List
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <Tooltip placement="top" title="Edit Details" key="list-vertical-edit-o">
                            <Button
                                onClick={() => editSavedLocation(item.savedLocationId)}
                                type="link"
                                icon="edit-o"
                                className="text-success"
                                // @TODO: work on this and remove it
                                disabled
                            />
                        </Tooltip>,
                        <Tooltip placement="top" title="View details" key="list-vertical-eye-o">
                            <Button
                                onClick={() => viewSavedLocation(item.savedLocationId)}
                                type="link"
                                icon="eye-o"
                            />
                        </Tooltip>,
                        <Tooltip placement="top" title="Delete" key="list-vertical-delete-o">
                            <Button
                                onClick={() => deleteSavedLocation(item.savedLocationId)}
                                type="link"
                                icon="delete-o"
                                className="text-danger"
                            />
                        </Tooltip>,
                    ]}
                    extra={(
                        <div className="d-flex justify-content-between">
                            <Typography.Text type="secondary">
                                {LOCATION_NUMBER_LABEL}
                            </Typography.Text>
                            <Tag color="geekblue" className="ml-3">
                                {item.locations ? item.locations.length : 0}
                            </Tag>
                        </div>
                    )}
                >
                    <List.Item.Meta
                        title={(
                            <Link to={renderPathUrl(item.savedLocationId)}>
                                {item.title}
                            </Link>
                        )}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );
};

export default withRouter(Lists);

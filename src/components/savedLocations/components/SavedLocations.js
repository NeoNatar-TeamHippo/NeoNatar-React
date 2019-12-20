import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, List, Tooltip, Button, Tag, Typography, Empty } from 'antd';
import {
    LOCATION_NUMBER_LABEL, DESCRIPTION_CREATE, CREATE_NOW,
    EMPTY_ICON_URL
} from '../constants';

const SavedLocations = ({ history }) => {
    const listData = [];
    const viewSavedLocation = savedLocationId => {
        console.log(savedLocationId);
    };
    const deleteSavedLocation = savedLocationId => {
        console.log(savedLocationId);
    };
    const editSavedLocation = savedLocationId => {
        console.log(savedLocationId);
    };
    const handleCreateList = () => {
        console.log('handling it');
    };
    const renderPathUrl = savedLocationId => `/dashboard/savedLocations/${savedLocationId}`;
    const renderList = () => (
        <List
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
                        <Tooltip placement="top" title="Edit Details" key="list-vertical-edit-o">
                            <Button
                                onClick={() => editSavedLocation(item.savedLocationId)}
                                type="link"
                                icon="edit-o"
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
                            />
                        </Tooltip>,
                    ]}
                    extra={(
                        <div className="d-flex justify-content-between">
                            <Typography.Text type="secondary">
                                {LOCATION_NUMBER_LABEL}
                            </Typography.Text>
                            <Tag color="volcano" className="ml-3">
                                {item.locations.length}
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
    for (let i = 0; i < 9; i++) {
        listData.push({
            description:
                'Ant Design, a design language for background ',
            locations: [1, 2, 3],
            savedLocationId: 'jjajsnksashsd',
            title: `ant design part ${i}`,
        });
    }

    return (
        <>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                    borderRadius: '4px',
                }}
                onBack={() => history.goBack()}
                title="Saved Locations"
                subTitle="All Locations saved by you"
                className="mb-2"
            />
            {listData.length === 0 ? (
                <Empty
                    image={EMPTY_ICON_URL}
                    imageStyle={{
                        height: 60,
                    }}
                    description={(
                        <Typography.Text type="secondary">
                            {DESCRIPTION_CREATE}
                        </Typography.Text>
                    )}
                >
                    <Button onClick={() => handleCreateList()} type="primary">{CREATE_NOW}</Button>
                </Empty>
            )
                : renderList()
            }
        </>
    );
};
export default SavedLocations;

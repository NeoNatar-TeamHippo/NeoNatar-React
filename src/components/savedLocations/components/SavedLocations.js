import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, List, Tooltip, Button, Tag, Typography } from 'antd';
import { LOCATION_NUMBER_LABEL } from '../constants';

const SavedLocations = ({ history }) => {
    const listData = [];
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
        <div>
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
                                    onClick={() => { console.log('view edit'); }}
                                    type="link"
                                    icon="edit-o"
                                />
                            </Tooltip>,
                            <Tooltip placement="top" title="View details" key="list-vertical-eye-o">
                                <Button
                                    onClick={() => { console.log('view details'); }}
                                    type="link"
                                    icon="eye-o"

                                />
                            </Tooltip>,
                            <Tooltip placement="top" title="Delete" key="list-vertical-delete-o">
                                <Button
                                    onClick={() => { console.log('view details'); }}
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
                                <Link to={`/dashboard/savedLocations/${item.savedLocationId}`}>
                                    {item.title}
                                </Link>
                            )}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
export default SavedLocations;

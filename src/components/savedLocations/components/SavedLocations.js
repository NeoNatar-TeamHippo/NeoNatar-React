import React from 'react';
import { PageHeader, Button, Typography, Empty } from 'antd';
import DataList from './Lists';
import { DESCRIPTION_CREATE, CREATE_NOW, EMPTY_ICON_URL } from '../constants';

const SavedLocations = ({ history }) => {
    const handleCreateList = () => {
        console.log('handling it');
    };
    const listData = [];
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
                : (<DataList />)
            }
        </>
    );
};
export default SavedLocations;

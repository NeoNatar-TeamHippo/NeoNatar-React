import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader, Button, Typography, Empty, Row, Col } from 'antd';
import DataList from './Lists';
import { DESCRIPTION_CREATE, CREATE_NOW, EMPTY_ICON_URL } from '../constants';
import { getSavedLocations } from '../actions';

const SavedLocations = ({ history }) => {
    const dispatch = useDispatch();
    const { savedLocations } = useSelector(state => state.savedLocation);
    const handleCreateList = () => {
        console.log('handling it');
    };
    useEffect(() => {
        dispatch(getSavedLocations());
    }, [dispatch]);
    return (
        <>
            <PageHeader
                onBack={() => history.push('/dashboard')}
                title="Saved Locations"
                subTitle="All Locations saved by you"
                className="mb-2 page_header"
            />
            {savedLocations.length === 0 ? (
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
                : (
                    <Row type="flex" justify="center" align="middle">
                        <Col className="mt-2" sm={24} md={16} lg={12}>
                            <DataList />
                        </Col>
                    </Row>
                )
            }
        </>
    );
};
export default SavedLocations;

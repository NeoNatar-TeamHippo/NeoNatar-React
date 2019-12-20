import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Button, Icon, Typography } from 'antd';
import { getSavedLocationsByID } from '../actions';
import LocationList from './LocationList';

const SaveLocationById = ({ match, history }) => {
    const { params } = match;
    const { id: savedLocationId } = params;
    const { savedLocationById } = useSelector(state => state.savedLocation);
    const { title } = savedLocationById;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSavedLocationsByID(savedLocationId));
    }, [dispatch, savedLocationId]);
    return (
        <div className="card_background">
            <Row className="d-sm-flex justify-content-sm-center">
                <Col sm={20} md={16} lg={12}>
                    <Card
                        hoverable
                        className="w-100"
                        actions={[
                            <Button key="arrow-left" type="link" onClick={() => history.goBack()}>
                                <Icon type="arrow-left" />
                            </Button>,
                        ]}
                    >
                        <Card.Meta
                            title={(
                                <Typography.Title level={4}>
                                    {title}
                                </Typography.Title>
                            )}
                        />
                        <LocationList savedLocationId={savedLocationId} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default SaveLocationById;

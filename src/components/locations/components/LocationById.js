import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Icon, Card, Carousel, Row, Col, Button, Typography, Tag
} from 'antd';
import { perWeek, naira, LOCAL_GOVERNMENT, ADDRESS, STATE } from '../constants';
import { getLocationsByID } from '../actions';

const LocationById = ({ match, history }) => {
    const dispatch = useDispatch();
    const { locationById, locationLoading } = useSelector(state => state.location);
    const { name, price, lga, trafficRate, address, state, images } = locationById;
    const { params } = match;
    const { id: locationId } = params;
    useEffect(() => {
        dispatch(getLocationsByID(locationId));
    }, [dispatch, locationId]);
    const renderAmount = text => (
        <Typography.Text type="secondary">
            <del>{naira}</del>
            <strong>
                {text}
            </strong>
            <span>
                {perWeek}
            </span>
        </Typography.Text>
    );
    const renderImages = locImages => locImages.map((element, i) => (
        !locationLoading ? (
            <img
                key={element}
                alt={i}
                src={element}
                style={{
                    objectFit: 'cover',
                }}
            />
        ) : ''

    ));
    const renderTag = text => {
        let color;
        let rateText;
        if (parseInt(text, 10) <= 200) {
            color = 'volcano';
            rateText = 'LOW';
        } else if (parseInt(text, 10) <= 500) {
            color = 'orange';
            rateText = 'MEDIUM';
        } else {
            color = 'green';
            rateText = 'HIGH';
        }
        return (
            <Tag color={color}>
                {rateText}
            </Tag>
        );
    };
    const renderDescription = (Locaddress, Locstate, Loclga) => {
        const userObj = [{ key: Locaddress }, { key: Loclga }, { key: Locstate }];
        return userObj.map((element, i) => {
            let label = '';
            if (i === 0) {
                label = ADDRESS;
            } else if (i === 1) {
                label = STATE;
            } else {
                label = LOCAL_GOVERNMENT;
            }
            return (
                <Row key={element.key}>
                    <Col sm={10} md={8} lg={6}>
                        <Typography.Text strong>
                            {label}
                        </Typography.Text>
                    </Col>
                    <Col sm={14} md={16} lg={18}>
                        <Typography.Text type="secondary">
                            {element.key}
                        </Typography.Text>
                    </Col>
                </Row>
            );
        });
    };
    return (
        <div className="card_background">
            <Row className="d-sm-flex justify-content-sm-center">
                <Col sm={20} md={16} lg={12}>
                    <Card
                        loading={locationLoading}
                        hoverable
                        className="w-100"
                        cover={(
                            <Carousel autoplay>
                                {renderImages(images)}
                            </Carousel>
                        )}
                        actions={[
                            <Button key="arrow-left" type="link" onClick={() => history.goBack()}>
                                <Icon type="arrow-left" />
                            </Button>,
                        ]}
                    >
                        <div className="d-flex justify-content-between">
                            <div>
                                <Typography.Title level={4}>
                                    {name}
                                </Typography.Title>
                            </div>
                            <div>
                                {renderTag(trafficRate)}
                                {renderAmount(price)}
                            </div>
                        </div>
                        <div>
                            {renderDescription(address, state, lga)}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default LocationById;

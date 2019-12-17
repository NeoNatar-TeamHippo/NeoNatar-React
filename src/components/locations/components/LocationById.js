import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Icon, Card, Carousel, Row, Col, Button, Typography, Tag, Descriptions, Skeleton
} from 'antd';
import { perWeek, naira, LOCAL_GOVERNMENT, ADDRESS, STATE } from '../constants';
import { getLocationsByID } from '../actions';
import { renderRateFormat } from '../../utils/functions';

const LocationById = ({ match, history }) => {
    const dispatch = useDispatch();
    const { params } = match;
    const { id: locationId } = params;
    const { locationById, locationLoading } = useSelector(state => state.location);
    const { name, price, lga, trafficRate, address, state, images } = locationById;
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
        const { color, rateText } = renderRateFormat(text);
        return (
            <Tag color={color}>
                {rateText}
            </Tag>
        );
    };
    const renderDescription = (Locaddress, Locstate, Loclga) => {
        const column = 2;
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
                <Descriptions key={element.key} size="small" column={column}>
                    <Descriptions.Item label={label}>{element.key}</Descriptions.Item>
                </Descriptions>
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
                                {images ? renderImages(images) : (<Skeleton />)}
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
export default withRouter(LocationById);

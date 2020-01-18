import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Icon, Card, Carousel, Row, Col, Button, Typography, Tag, Descriptions, Spin
} from 'antd';
import { PERWEEK, LOCAL_GOVERNMENT, ADDRESS, STATE, NAIRA } from '../constants';
import { renderRateFormat } from '../../utils/functions';

const LocationById = ({ match, history }) => {
    const { params } = match;
    const { id: locationId } = params;
    const { locations } = useSelector(state => state.location);
    const [newLocation, setNewLocation] = useState({});
    const { name, price, lga, trafficRate, address, state, images } = newLocation;
    useEffect(() => {
        locations.forEach(location => {
            if (location.locationId === locationId) {
                setNewLocation(location);
            }
        });
    }, [locationId, locations]);
    const renderAmount = text => (
        <Typography.Text type="secondary">
            <del>{NAIRA}</del>
            <strong>
                {text}
            </strong>
            <span>
                {PERWEEK}
            </span>
        </Typography.Text>
    );
    const renderImages = locImages => locImages.map((element, i) => (
        <img
            key={element}
            alt={element}
            src={element}
            style={{
                objectFit: 'cover',
            }}
            height="300px"
        />
    ));
    const renderTag = text => {
        const { color } = renderRateFormat(text);
        return (
            <Tag color={color}>
                {text}
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
                        hoverable
                        className="w-100"
                        cover={(
                            <Carousel autoplay>
                                {images && images.length > 0 ? renderImages(images) : (
                                    <div className="img d-flex flex-column justify-content-center">
                                        <Spin size="large" tip="Loading..." />
                                    </div>
                                )}
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

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Row, Col } from 'antd';
import LocationTable from './Table';
import { ADD_SELECTED, OUR_LOCATION } from '../constants';
import { getLocations } from '../actions';

const { Title } = Typography;
const Locations = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);
    return (
        <div>
            <Row>
                <Col sm={8} md={6} lg={4}>
                    <Title level={4}>
                        {OUR_LOCATION}
                    </Title>
                </Col>
                <Col sm={16} md={18} lg={20}>
                    <Button className="mb-2" size="default" type="primary">
                        {ADD_SELECTED}
                    </Button>
                </Col>
            </Row>
            <LocationTable />
        </div>
    );
};
export default Locations;

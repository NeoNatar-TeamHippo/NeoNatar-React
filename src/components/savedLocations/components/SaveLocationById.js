import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, Button, Icon, Typography } from 'antd';
import LocationList from './LocationList';

const SaveLocationById = ({ match, history }) => {
    const { params } = match;
    const { id: savedLocationId } = params;
    const { savedLocations } = useSelector(state => state.savedLocation);
    const { locations } = useSelector(state => state.location);
    const [newSavedLocation, setnewSavedLocation] = useState({});
    const { title } = newSavedLocation;
    useEffect(() => {
        const retrievedLocations = [];
        savedLocations.forEach(savedLocation => {
            if (savedLocation.savedLocationId === savedLocationId) {
                savedLocation.locations.forEach(savedLoc => locations.forEach(loc => {
                    if (loc.locationId === savedLoc) {
                        retrievedLocations.push(loc);
                    }
                }));
                savedLocation.locations = retrievedLocations;
                setnewSavedLocation(savedLocation);
            }
        });
    }, [locations, savedLocationId, savedLocations]);
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
                        <LocationList
                            savedLocationId={savedLocationId}
                            newSavedLocation={newSavedLocation}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default SaveLocationById;

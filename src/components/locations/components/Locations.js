import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageHeader } from 'antd';
import LocationTable from './Table';
import { OUR_LOCATION } from '../constants';
import { getLocations } from '../actions';

const Locations = ({ history }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);
    return (
        <>
            <PageHeader
                onBack={() => history.goBack()}
                title={OUR_LOCATION}
                className="mb-2 page_header"
                bordered={false}
            />
            <LocationTable />
        </>
    );
};
export default Locations;

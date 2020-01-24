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
        <LocationTable />
    );
};
export default Locations;

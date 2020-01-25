import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LocationTable from './Table';
import { getLocations } from '../actions';

const Locations = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);
    return (
        <LocationTable />
    );
};
export default Locations;

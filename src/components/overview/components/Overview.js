import React from 'react';
import { useSelector } from 'react-redux';

import AdminOverview from './AdminOverview';
import ClientOverview from './ClientOverview';

const Overview = () => {
    const { loading } = useSelector(state => state.signIn);
    return (
        loading ? <AdminOverview /> : <ClientOverview />
    );
};

export default Overview;

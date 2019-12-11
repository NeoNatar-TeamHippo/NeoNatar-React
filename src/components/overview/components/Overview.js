import React from 'react';
import { useSelector } from 'react-redux';

import AdminOverview from './AdminOverview';
import ClientOverview from './ClientOverview';

const Overview = () => {
    const { isAdmin } = useSelector(state => state.user.user);
    return (
        isAdmin ? <AdminOverview /> : <ClientOverview />
    );
};

export default Overview;

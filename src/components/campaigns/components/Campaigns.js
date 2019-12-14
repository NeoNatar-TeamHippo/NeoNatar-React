import React from 'react';
import { useSelector } from 'react-redux';

import AdminCampaigns from './AdminCampaigns';
import ClientCampaigns from './ClientCampaigns';

const Overview = () => {
    // const { isAdmin } = useSelector(state => state.user.user);
    const { isAuthenticated } = useSelector(state => state.signIn);

    return (
        isAuthenticated ? <AdminCampaigns /> : <ClientCampaigns />
    );
};

export default Overview;

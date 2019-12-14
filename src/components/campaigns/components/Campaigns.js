import React from 'react';
import { useSelector } from 'react-redux';

import AdminCampaigns from './AdminCampaigns';
import ClientCampaigns from './ClientCampaigns';

const Campaingns = () => {
    // const { isAdmin } = useSelector(state => state.user.user);

    return (
        true ? <AdminCampaigns /> : <ClientCampaigns />
    );
};

export default Campaingns;

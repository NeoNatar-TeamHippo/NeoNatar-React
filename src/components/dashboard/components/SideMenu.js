import React from 'react';
import { useSelector } from 'react-redux';

import AdminSideMenu from './AdminSideMenu';
import ClientSideMenu from './ClientSideMenu';

const SideMenu = () => {
    const { isAdmin } = useSelector(state => state.user.user);

    return (
        isAdmin ? <AdminSideMenu /> : <ClientSideMenu />
    );
};

export default SideMenu;

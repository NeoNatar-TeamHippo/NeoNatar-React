import React from 'react';
import { useSelector } from 'react-redux';

import AdminSideMenu from './AdminSideMenu';
import ClientSideMenu from './ClientSideMenu';

const SideMenu = () => {
    // const { isAdmin } = useSelector(state => state.user.user);
    const { isAuthenticated } = useSelector(state => state.signIn);

    return (
        isAuthenticated ? <AdminSideMenu /> : <ClientSideMenu />
    );
};

export default SideMenu;

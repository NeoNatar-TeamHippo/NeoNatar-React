import React from 'react';
import { useSelector } from 'react-redux';

import AuthNavbar from './AuthNavbar';
import UnAuthNavbar from './UnAuthNavbar';

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.signIn);
    return (
        isAuthenticated ? <AuthNavbar /> : <UnAuthNavbar />
    );
};

export default Navbar;

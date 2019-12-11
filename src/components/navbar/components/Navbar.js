import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AuthNavbar from './AuthNavbar';
import UnAuthNavbar from './UnAuthNavbar';
import { loadingUser } from '../actions';

const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadingUser());
    }, []);
    const { isAuthenticated } = useSelector(state => state.signIn);
    return (
        isAuthenticated ? <AuthNavbar /> : <UnAuthNavbar />
    );
};

export default Navbar;

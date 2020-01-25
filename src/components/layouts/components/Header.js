import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Menu, Layout } from 'antd';
import Logo from '../../../images/neoNatar Logo.svg';

import { SIGNIN, SIGNUP, GO_TO_DASHBOARD } from '../constants';

const { Item } = Menu;
const { Header } = Layout;

const NavHeader = () => {
    const { location } = useSelector(state => state.router);
    const { authenticated } = useSelector(state => state.signIn);

    const menuItem = (linkPath, text, type) => (
        <Item className="header-item">
            <Button type="primary" ghost={type}>
                <Link to={linkPath}>
                    {text}
                </Link>
            </Button>
        </Item>
    );

    const renderMenuItem = ({ pathname }) => {
        if (pathname === '/signup') {
            return menuItem('/signin', SIGNIN, false);
        }
        if (pathname === '/signin') {
            return menuItem('/signup', SIGNUP, true);
        }
        if (authenticated) {
            return menuItem('/dashboard', GO_TO_DASHBOARD, false);
        }
        return [
            menuItem('/signin', SIGNIN, false),
            menuItem('/signup', SIGNUP, true),
        ];
    };

    return (
        <Header>
            <Link to="/" className="left-menu">
                <img src={Logo} height="60px" alt="NeoNatar Logo" />
            </Link>
            <Menu className="right-nav" mode="horizontal">
                {renderMenuItem(location)}
            </Menu>
        </Header>
    );
};

export default NavHeader;

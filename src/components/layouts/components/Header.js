import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Menu, Layout } from 'antd';

import Logo from '../../../images/mock-logo.png';

import { SIGNIN, SIGNUP, GO_TO_DASHBOARD } from '../constants';

const { Item } = Menu;
const { Header } = Layout;

const NavHeader = () => {
    const { location } = useSelector(state => state.router);
    const { user } = useSelector(state => state.user);

    const renderMenuItem = path => {
        if (path.pathname === '/signup') {
            return (
                <Menu className="right-nav" mode="horizontal">
                    <Item className="header-item">
                        <Button type="primary" ghost>
                            <Link to="/signin">
                                {SIGNIN}
                            </Link>
                        </Button>
                    </Item>
                </Menu>
            );
        }
        if (path.pathname === '/signin') {
            return (
                <Menu className="right-nav" mode="horizontal">
                    <Item className="header-item">
                        <Button type="primary">
                            <Link to="/signup">
                                {SIGNUP}
                            </Link>
                        </Button>
                    </Item>
                </Menu>
            );
        }
        if (user) {
            return (
                <Menu className="right-nav" mode="horizontal">
                    <Item className="header-item">
                        <Button type="primary">
                            <Link to="/dashboard">
                                {GO_TO_DASHBOARD}
                            </Link>
                        </Button>
                    </Item>
                </Menu>
            );
        }
        return (
            <Menu className="right-nav" mode="horizontal">
                <Item className="modified-item">
                    <Button type="primary" ghost>
                        <Link to="/signin">
                            {SIGNIN}
                        </Link>
                    </Button>
                </Item>
                <Item className="modified-item">
                    <Button type="primary">
                        <Link to="/signup">
                            {SIGNUP}
                        </Link>
                    </Button>
                </Item>
            </Menu>
        );
    };

    return (
        <Header>
            <Link to="/" className="left-menu">
                <img src={Logo} height="60px" alt="NeoNatar Logo" />
            </Link>
            {renderMenuItem(location)}
        </Header>
    );
};

export default NavHeader;

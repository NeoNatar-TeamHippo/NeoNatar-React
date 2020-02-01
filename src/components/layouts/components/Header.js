import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Menu, Avatar, Icon, Typography } from 'antd';
import { NavLink } from 'react-router-dom';

import { SIGNIN, SIGNUP, SETTINGS, TRANSACTIONS, LOGOUT_TEXT } from '../constants';

import navbar from '../../navbar';

import UserLogo from '../../../images/user.svg';

const { logoutUser } = navbar.actions;
const { Item, SubMenu } = Menu;

const NavHeader = () => {
    const { user, navLoading } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { location } = useSelector(state => state.router);
    const { authenticated } = useSelector(state => state.signIn);

    const menuItem = (linkPath, text, type) => (
        <Item className="header-item">
            <Button type="primary" ghost={type}>
                <NavLink to={linkPath}>
                    {text}
                </NavLink>
            </Button>
        </Item>
    );
    const userIcon = () => (
        <SubMenu
            key="sub1"
            title={(
                <NavLink to="/dashboard">
                    <span>
                        {navLoading ? (<Avatar src={UserLogo} />)
                            : (<Avatar src={user.avatar} />)}
                    </span>
                </NavLink>
                )}
        >
            <Item key="transactions">
                <NavLink to="/dashboard/transactions">
                    <Icon type="interaction" />
                    <span>
                        {TRANSACTIONS}
                    </span>
                </NavLink>
            </Item>
            <Item disabled key="settings">
                <NavLink to="/">
                    <Icon type="setting" />
                    <span>
                        {SETTINGS}
                    </span>
                </NavLink>
            </Item>
            <Item key="logout">
                <Button onClick={() => dispatch(logoutUser())} type="link">
                    <Typography.Text type="danger">
                        {LOGOUT_TEXT}
                    </Typography.Text>
                </Button>
            </Item>
        </SubMenu>
    );

    const renderMenuItem = ({ pathname }) => {
        if (pathname === '/signup') {
            return menuItem('/signin', SIGNIN, false);
        }
        if (pathname === '/signin') {
            return menuItem('/signup', SIGNUP, true);
        }
        if (authenticated) {
            return userIcon();
        }

        return [
            menuItem('/signin', SIGNIN, false),
            menuItem('/signup', SIGNUP, true),
        ];
    };

    return (
        <Menu className="right-nav" mode="horizontal">
            {renderMenuItem(location)}
        </Menu>
    );
};

export default NavHeader;

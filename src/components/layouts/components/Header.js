import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import { SIGNIN, SIGNUP } from '../constants';

import navbar from '../../navbar';

const { Navbar } = navbar.components;
const { Item } = Menu;

const NavHeader = () => {
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
        <Navbar />
    );

    const renderMenuItem = ({ pathname }) => {
        if (pathname === '/signup') {
            return menuItem('/signin', SIGNIN, false);
        }
        if (pathname === '/signin') {
            return menuItem('/signup', SIGNUP, true);
        }
        return [
            menuItem('/signin', SIGNIN, false),
            menuItem('/signup', SIGNUP, true),
        ];
    };

    return (
        <>
            {
                authenticated ? userIcon()
                    : (
                        <Menu className="right-nav" mode="horizontal">
                            {
                                renderMenuItem(location)
                            }
                        </Menu>
                    )
            }
        </>
    );
};

export default NavHeader;

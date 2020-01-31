import React from 'react';
import { Avatar, Divider, Icon, Menu, Button, Typography, Badge, Tooltip } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ICONS, VERTICAL, LOGOUT_TEXT, SETTINGS, TRANSACTIONS } from '../constants';
import { logoutUser } from '../actions';

import UserLogo from '../../../images/user.svg';

const { BELL } = ICONS;
const { SubMenu, Item } = Menu;

const Navbar = () => {
    const dispatch = useDispatch();
    const { user, navLoading } = useSelector(state => state.user);
    const fullName = `${user.firstName} ${user.lastName}`;

    return (
        <Menu className="right-nav" mode="horizontal">
            <Item key="notification">
                <Tooltip title="Under construction">
                    <Button type="link" disabled>
                        <Badge count={5} dot>
                            <Icon type={BELL} />
                        </Badge>
                    </Button>

                </Tooltip>
            </Item>
            <Divider type={VERTICAL} />
            <Typography.Text className="display-name" strong>
                {!navLoading ? fullName.toUpperCase() : 'User'}
            </Typography.Text>
            <Divider type={VERTICAL} />
            <SubMenu
                key="sub1"
                title={(
                    <span>
                        {navLoading ? (<Avatar src={UserLogo} />)
                            : (<Avatar src={user.avatar} />)}
                    </span>
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
        </Menu>
    );
};

export default Navbar;

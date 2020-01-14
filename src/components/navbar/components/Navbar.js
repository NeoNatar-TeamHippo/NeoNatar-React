import React from 'react';
import { Avatar, Divider, Icon, Menu, Button, Typography, Badge } from 'antd';
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
            <Badge count={0} dot>
                <Button type="link">
                    <Icon type={BELL} />
                </Button>
            </Badge>
            <Typography.Text className="display-name" strong>
                {!navLoading ? fullName.toLowerCase() : 'User'}
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
                <Item>
                    <NavLink to="/dashboard/transactions">
                        <Icon type="interaction" />
                        <span>
                            {TRANSACTIONS}
                        </span>
                    </NavLink>
                </Item>
                <Item>
                    <NavLink to="/">
                        <Icon type="setting" />
                        <span>
                            {SETTINGS}
                        </span>
                    </NavLink>
                </Item>
                <Item key="1">
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

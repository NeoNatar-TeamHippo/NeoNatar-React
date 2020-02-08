import React, { useEffect } from 'react';
import { Avatar, Divider, Icon, Menu, Button, Typography, Badge, Popover, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ICONS, VERTICAL, LOGOUT_TEXT, SETTINGS, TRANSACTIONS } from '../constants';
import { logoutUser, getNotification, callMarkRead } from '../actions';

import UserLogo from '../../../images/user.svg';

const { BELL } = ICONS;
const { SubMenu, Item } = Menu;

const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNotification());
    }, [dispatch]);
    const { user, navLoading, notifications } = useSelector(state => state.user);
    const fullName = `${user.firstName} ${user.lastName}`;
    const renderIcon = type => {
        let iconType;
        if (type === 'commercials') {
            iconType = 'play-square';
        }
        if (type === 'users') {
            iconType = 'user';
        }
        if (type === 'campaign') {
            iconType = 'sound';
        }
        if (type === 'locations') {
            iconType = 'environment';
        }
        return (<Icon className="ml-3" type={iconType} />);
    };
    const markAsRead = () => {
        const id = notifications.map(notifi => notifi.id);
        const data = {
            id,
        };
        dispatch(callMarkRead(data));
    };
    return (
        <Menu className="right-nav" mode="horizontal">
            <Item key="notification">
                <div onMouseLeave={notifications.length !== 0 ? markAsRead : null}>
                    <Popover
                        content={notifications.length !== 0 ? (
                            <List
                                size="small"
                                dataSource={notifications}
                                itemLayout="horizontal"
                                renderItem={({ message, type }) => (
                                    <List.Item
                                        extra={renderIcon(type)}
                                    >
                                        <List.Item.Meta
                                            description={message}
                                        />
                                    </List.Item>
                                )}
                            />
                        ) : (<Typography.Text type="danger">No New Notifications</Typography.Text>)}
                    >
                        <Button type="link">
                            <Badge count={notifications.length} dot>
                                <Icon type={BELL} />
                            </Badge>
                        </Button>
                    </Popover>
                </div>
            </Item>
            <Divider className="display-name" type={VERTICAL} />
            <Typography.Text className="display-name" strong>
                {!navLoading ? fullName.toUpperCase() : 'User'}
            </Typography.Text>
            <Divider type={VERTICAL} />
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
        </Menu>
    );
};

export default Navbar;

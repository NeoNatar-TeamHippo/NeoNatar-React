import React, { useState } from 'react';
import { Icon, Menu, Tooltip, Avatar, Divider, Button, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import history from '../../history/History';
import { logoutUser } from '../../navbar/actions';
import UserLogo from '../../../images/user.svg';
import {
    ADMIN_SIDE_MENU_ITEMS, CLIENT_SIDE_MENU_ITEMS,
    INLINE, THEME, LOGOUT_TEXT
} from '../constants';

const SideMenu = () => {
    const currentPath = history.location.pathname;
    const { user, navLoading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(currentPath);
    const menuItems = user.isAdmin ? ADMIN_SIDE_MENU_ITEMS : CLIENT_SIDE_MENU_ITEMS;
    const renderTemplate = ({ iconType, label, link }) => {
        let template = '';
        if (link) {
            template = (
                <NavLink to={link}>
                    <Icon type={iconType} />
                    <span>
                        {label}
                    </span>
                </NavLink>
            );
        } else {
            template = (
                <Tooltip title="under construction">
                    <Icon type={iconType} />
                    <span>
                        {label}
                    </span>
                </Tooltip>
            );
        }
        return template;
    };
    return (
        <Menu
            mode={INLINE}
            theme={THEME}
            selectedKeys={[current]}
            defaultSelectedKeys={['/dashboard']}
            onClick={e => setCurrent(e.key)}
        >
            {
                menuItems.map(({ iconType, label, link }) => (
                    <Menu.Item key={link}>
                        {renderTemplate({ iconType, label, link })}
                    </Menu.Item>
                ))
            }
            <Divider />
            <Menu.Item>
                <div className="d-flex justify-content-center">
                    {navLoading ? (<Avatar src={UserLogo} />)
                        : (<Avatar src={user.avatar} />)}
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="d-flex justify-content-center">
                    <Button onClick={() => dispatch(logoutUser())} type="link">
                        <Typography.Text type="danger">
                            {LOGOUT_TEXT}
                        </Typography.Text>
                    </Button>
                </div>
            </Menu.Item>
        </Menu>
    );
};
export default SideMenu;

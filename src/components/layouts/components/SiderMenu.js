import React, { useState } from 'react';
import { Icon, Menu, Tooltip, Divider } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import history from '../../history/History';
import {
    ADMIN_SIDE_MENU_ITEMS,
    CLIENT_SIDE_MENU_ITEMS,
    INLINE, THEME
} from '../constants';

const SideMenu = () => {
    const currentPath = history.location.pathname;
    const { user } = useSelector(state => state.user);
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
            style={{ lineHeight: '64px' }}
        >
            {
                menuItems.map(({ iconType, label, link }) => (
                    <Menu.Item key={link}>
                        {renderTemplate({ iconType, label, link })}
                    </Menu.Item>
                ))
            }
            <Divider />
        </Menu>
    );
};
export default SideMenu;

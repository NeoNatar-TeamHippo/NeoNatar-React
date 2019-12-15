import React, { useState } from 'react';
import { Icon, Menu, Tooltip, Avatar, Divider, Button, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import history from '../../history/History';
import { SIDE_MENU_ITEMS, INLINE, THEME, LOGOUT_TEXT } from '../constants';

const SideMenu = () => {
    const currentSlug = history.location.pathname;
    const { user } = useSelector(state => state.user);
    const [current, setCurrent] = useState(currentSlug);
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
                SIDE_MENU_ITEMS.map(({ iconType, label, link }) => (
                    <Menu.Item key={link}>
                        {renderTemplate({ iconType, label, link })}
                    </Menu.Item>
                ))
            }
            <Divider />
            <Menu.Item>
                <div className="d-flex justify-content-center">
                    <Avatar size="large" src={user.avatar} />
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="d-flex justify-content-center">
                    <Button type="link">
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

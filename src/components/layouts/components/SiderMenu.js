import React from 'react';
import { Icon, Menu, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

import { SIDE_MENU_ITEMS, INLINE, THEME } from '../constants';

const SideMenu = () => {
    const renderTemplate = ({ iconType, label, link }) => {
        let template = '';
        if (link) {
            template = (
                <Link to={link}>
                    <Icon type={iconType} />
                    <span>
                        {label}
                    </span>
                </Link>
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
        <Menu mode={INLINE} theme={THEME} defaultSelectedKeys={['Overview']}>
            {
                SIDE_MENU_ITEMS.map(({ iconType, label, link }) => (
                    <Menu.Item key={label}>
                        {renderTemplate({ iconType, label, link })}
                    </Menu.Item>
                ))
            }
        </Menu>
    );
};
export default SideMenu;

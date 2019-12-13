import React from 'react';
import { Icon, Menu, Tooltip } from 'antd';

import { SIDE_BAR, ADMIN_SIDE_MENU_ITEMS, INLINE } from '../constants';

import app from '../../app';

const { AppLink } = app.components;
const { Item } = Menu;

const AdminSideMenu = () => (
    <Menu className={SIDE_BAR} mode={INLINE}>
        {ADMIN_SIDE_MENU_ITEMS.map(({ iconType, label, link }) => (
            <Item key={link || label}>
                {link ? (
                    <AppLink to={link}>
                        <span>
                            <Icon type={iconType} />
                            {label}
                        </span>
                    </AppLink>
                ) : (
                    <Tooltip title="under construction">
                        <span>
                            <Icon type={iconType} />
                            {label}
                        </span>
                    </Tooltip>
                )}
            </Item>
        ))}
    </Menu>
);

export default AdminSideMenu;
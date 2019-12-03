import React from 'react';
import { Icon, Menu } from 'antd';

import { SIDE_BAR, SIDE_MENU_ITEMS, INLINE } from '../constants';

const SideMenu = () => (
    <Menu className={SIDE_BAR} mode={INLINE}>
        {SIDE_MENU_ITEMS.map(({ iconType, label }) => (
            <Menu.Item key={label}>
                <span>
                    <Icon type={iconType} />
                    {label}
                </span>
            </Menu.Item>
        ))}
    </Menu>
);

export default SideMenu;

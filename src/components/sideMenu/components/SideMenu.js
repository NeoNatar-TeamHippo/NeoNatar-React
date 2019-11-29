import React from 'react';
import { Icon, Menu } from 'antd';

import { SIDE_BAR, SIDE_MENU_ITEMS, INLINE } from '../constants';

export default class SideMenu extends React.Component {
    render() {
        return (
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
    }
}

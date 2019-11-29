import React from 'react';
import { Menu, Icon } from 'antd';

import { SIDE_BAR, SIDE_BAR_ITEM, SIDE_MENU_ITEMS, INLINE } from '../constants';

export default class SideMenu extends React.Component {
    render() {
        return (
            <Menu className={SIDE_BAR} mode={INLINE}>
                {SIDE_MENU_ITEMS.map(({ iconType, label }) => (
                    <Menu.Item className={SIDE_BAR_ITEM} key={label}>
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

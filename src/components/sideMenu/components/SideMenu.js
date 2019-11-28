import React from 'react';
import { Menu, Icon } from 'antd';

import { SIDE_MENU_ITEMS, INLINE } from '../constants';

export default class SideMenu extends React.Component {
    render() {
        return (
            <Menu mode={INLINE} theme={'dark'}>
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

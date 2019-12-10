import React from 'react';
import { Avatar, Divider, Icon, Menu } from 'antd';

import { ICONS, VERTICAL, NAME } from '../constants';

import User from '../../../images/Profile_Picture.png';

const { BELL, SEARCH } = ICONS;

const { Item } = Menu;

const AuthRightMenu = () => (
    <Menu mode="horizontal">
        <Item>
            <Icon type={SEARCH} />
        </Item>
        <Item>
            <Icon type={BELL} />
        </Item>
        <Item>
            <Divider type={VERTICAL} />
        </Item>
        <Item>
            {NAME}
        </Item>
        <Item>
            <Avatar src={User} />
        </Item>
    </Menu>
);

export default AuthRightMenu;

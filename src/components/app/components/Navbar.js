import React from 'react';
import { Divider, Icon, Avatar, Layout, Menu } from 'antd';
import Logo from '../../../images/Logo.png';
import User from '../../../images/Profile_Picture.png';

import { CLASSNAMES, STRINGS } from '../constants';

const { BARS, HORIZONTAL, NEONATAR, OVERVIEW } = STRINGS;
const { LEFT_NAV_MENU, HEADER_MENU, RIGHT_NAV_MENU } = CLASSNAMES;

const { Item } = Menu;
const { Header } = Layout;

const Navabar = () => (
    <Header className={HEADER_MENU}>
        <Menu mode={HORIZONTAL} className={LEFT_NAV_MENU}>
            <Item>
                <Avatar src={Logo} />
                {NEONATAR}
            </Item>
            <Item>
                <Icon type={BARS} />
            </Item>
            <Item>
                {OVERVIEW}
            </Item>
        </Menu>
        <Menu mode={HORIZONTAL} className={RIGHT_NAV_MENU}>
            <Item>
                <Icon type={'search'} />
            </Item>
            <Item>
                <Icon type={'bell'} />
            </Item>
            <Item>
                <Divider type={'vertical'} />
            </Item>
            <Item>
                {'Chioma Onyekpere'}
            </Item>
            <Item>
                <Avatar src={User} />
            </Item>
        </Menu>
    </Header>
);

export default Navabar;

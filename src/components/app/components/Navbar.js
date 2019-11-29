import React from 'react';
import { Divider, Icon, Avatar, Layout, Menu } from 'antd';
import Logo from '../../../images/Logo.png';
import User from '../../../images/Profile_Picture.png';

import { CLASSNAMES, ICONS, STRINGS } from '../constants';

const { HORIZONTAL, NAME, NEONATAR, OVERVIEW, VERTICAL } = STRINGS;
const { BARS, BELL, SEARCH } = ICONS;
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
    </Header>
);

export default Navabar;

import React from 'react';
import { Avatar, Layout, Menu } from 'antd';
import Logo from '../../../images/Logo.png';

const { Item } = Menu;
const { Header } = Layout;
const Navabar = () => (
    <Header theme={'light'}>
        <Menu>
            <Item>
                <Avatar src={Logo} />
            </Item>
        </Menu>
    </Header>
);

export default Navabar;

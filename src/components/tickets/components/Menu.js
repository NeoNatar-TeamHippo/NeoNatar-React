import React from 'react';
import { Menu, Icon } from 'antd';
import { ALL, PENDING, NEW, RESOLVED, MAIL, HORIZONTAL } from '../constants';

const TicketMenu = () => {
    return (
        <Menu mode={HORIZONTAL}>
            <Menu.Item>
                <Icon type={MAIL} />
                {ALL}
            </Menu.Item>
            <Menu.Item>
                <Icon type={MAIL} />
                {NEW}
            </Menu.Item>
            <Menu.Item>
                <Icon type={MAIL} />
                {PENDING}
            </Menu.Item>
            <Menu.Item>
                <Icon type={MAIL} />
                {RESOLVED}
            </Menu.Item>
        </Menu>
    );
};

export default TicketMenu;

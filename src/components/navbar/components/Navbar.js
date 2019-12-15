import React from 'react';
import { Avatar, Divider, Icon, Menu, Button, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { ICONS, VERTICAL, LOGOUT_TEXT } from '../constants';

const { BELL } = ICONS;

const Navbar = () => {
    const { user, navLoading } = useSelector(state => state.user);
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
        <div className="container-fluid d-flex justify-content-end">
            {!navLoading ? (
                <Menu mode="horizontal">
                    <Button type="link">
                        <Icon type={BELL} />
                    </Button>
                    <Divider type={VERTICAL} />
                    <Typography.Text strong>
                        {fullName}
                    </Typography.Text>
                    <Divider type={VERTICAL} />
                    <Avatar src={user.avatar} />
                    <Divider type={VERTICAL} />
                    <Button type="link">
                        <Typography.Text type="danger">
                            {LOGOUT_TEXT}
                        </Typography.Text>
                    </Button>
                </Menu>
            ) : ''}
        </div>
    );
};

export default Navbar;

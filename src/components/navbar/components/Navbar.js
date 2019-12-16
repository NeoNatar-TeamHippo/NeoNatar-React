import React from 'react';
import { Avatar, Divider, Icon, Menu, Button, Typography, Badge } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ICONS, VERTICAL, LOGOUT_TEXT } from '../constants';
import { logoutUser } from '../actions';
import UserLogo from '../../../images/user.svg';

const { BELL } = ICONS;

const Navbar = () => {
    const dispatch = useDispatch();
    const { user, navLoading } = useSelector(state => state.user);
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
        <div className="d-flex justify-content-end">
            <Menu mode="horizontal">
                <Badge count={0} dot>
                    <Button type="link">
                        <Icon type={BELL} />
                    </Button>
                </Badge>
                <Divider type={VERTICAL} />
                <Typography.Text strong>
                    {!navLoading ? fullName.toLowerCase() : 'User'}
                </Typography.Text>
                <Divider type={VERTICAL} />
                {navLoading ? (<Avatar src={UserLogo} />)
                    : (<Avatar src={user.avatar} />)}
                <Divider type={VERTICAL} />
                <Button onClick={() => dispatch(logoutUser())} type="link">
                    <Typography.Text type="danger">
                        {LOGOUT_TEXT}
                    </Typography.Text>
                </Button>
            </Menu>
        </div>
    );
};

export default Navbar;

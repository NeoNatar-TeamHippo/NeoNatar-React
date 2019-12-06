import React, { useState } from 'react';
import { Avatar, Drawer, Button } from 'antd';

import RightMenu from './RightNav';
import { NEONATAR } from '../constants';

import Logo from '../../../images/Logo.png';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <nav className="menuBar">
            <div className="logo">
                <Avatar src={Logo} />
                {NEONATAR}
            </div>
            <div className="menuCon">
                <div className="rightMenu">
                    <RightMenu />
                </div>
                <Button className="barsMenu" type="primary" onClick={showDrawer}>
                    <span className="barsBtn" />
                </Button>
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <RightMenu />
                </Drawer>

            </div>
        </nav>
    );
}

export default Navbar;

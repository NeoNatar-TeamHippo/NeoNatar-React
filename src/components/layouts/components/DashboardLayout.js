import React, { useState } from 'react';
import { Layout } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

import SideMenu from './SiderMenu';

import navbar from '../../navbar';
import Logo from '../../../images/neoNatar Logo.svg';

const { Content, Header, Sider } = Layout;
const { Navbar } = navbar.components;

const DashboardLayout = props => {
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsedValue => {
        if (collapsedValue) {
            document.getElementById('adjust_sidebar').classList.add('adjust_sidebar')
        }
        else {
            document.getElementById('adjust_sidebar').classList.remove('adjust_sidebar')
        }
        setCollapsed(collapsedValue);
    };
    return (
        <Layout>
            <Header className="header-menu">
                <NavLink to="/" className="left-menu">
                    <img src={Logo} width="100%" height="30px" alt="NeoNatar Logo" />
                </NavLink>
                <Navbar />
            </Header>
            <Layout>
                <Sider
                    breakpoint="md"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    className="side-menu-item"
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <SideMenu />
                </Sider>
                <Content id='adjust_sidebar' className="content uncollapsed_sidebar px-4">
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default withRouter(DashboardLayout);

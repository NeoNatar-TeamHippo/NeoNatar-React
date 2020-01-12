import React, { useState } from 'react';
import { Layout } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';

import FooterComponent from './Footer';
import SideMenu from './SiderMenu';

import navbar from '../../navbar';
import Logo from '../../../images/neoNatar Logo.svg';

const { Content, Footer, Header, Sider } = Layout;
const { Navbar } = navbar.components;

const DashboardLayout = props => {
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsedValue => {
        setCollapsed(collapsedValue);
    };
    return (
        <Layout>
            <Header>
                <NavLink to="/dashboard" className="my-2 d-flex justify-content-center">
                    <img src={Logo} width="100%" height="30px" alt="NeoNatar Logo" />
                </NavLink>
                <Navbar />
            </Header>
            <Layout>
                <Sider
                    breakpoint="sm"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    className="side-menu-item"
                >
                    <SideMenu />
                </Sider>
                <Content className="content container">
                    {children}
                </Content>
            </Layout>
            <Footer className="text-center">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};

export default withRouter(DashboardLayout);

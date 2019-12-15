import React, { useState } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
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
            <Sider
                breakpoint="sm"
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
            >
                <div className="container mt-2 mb-3">
                    <img src={Logo} width="100%" height="30px" alt="NeoNatar Logo" />
                </div>
                <SideMenu />
            </Sider>
            <Content className="content">
                <Layout>
                    <Header>
                        <Navbar />
                    </Header>
                    <Content className="container">
                        {children}
                    </Content>
                    <Footer className="text-center">
                        <FooterComponent />
                    </Footer>
                </Layout>
            </Content>
        </Layout>
    );
};

export default withRouter(DashboardLayout);

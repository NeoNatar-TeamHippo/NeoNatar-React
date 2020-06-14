import { Layout, Typography } from 'antd';
import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import navbar from '../../navbar';
import SideMenu from './SiderMenu';

const { Content, Header, Sider } = Layout;
const { Navbar } = navbar.components;
const { Title } = Typography;

const DashboardLayout = props => {
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsedValue => {
        if (collapsedValue) {
            document.getElementById('adjust_sidebar').classList.add('adjust_sidebar');
        } else {
            document.getElementById('adjust_sidebar').classList.remove('adjust_sidebar');
        }
        setCollapsed(collapsedValue);
    };

    return (
        <Layout>
            <Header className="header-menu">
                <NavLink to="/" className="left-menu">
                    <Title>DNTV</Title>
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
                        height: '100vh',
                        left: 0,
                        overflow: 'auto',
                        position: 'fixed',
                    }}
                >
                    <SideMenu />
                </Sider>
                <Content id="adjust_sidebar" className="content uncollapsed_sidebar px-4">
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default withRouter(DashboardLayout);

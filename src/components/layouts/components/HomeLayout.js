import React from 'react';
import { Layout, Typography } from 'antd';
import { withRouter, NavLink } from 'react-router-dom';

import NavHeader from './Header';
import FooterComponent from './Footer';

const { Title } = Typography;

const { Footer, Content, Header } = Layout;

const HomeLayout = props => {
    const { children } = props;
    return (
        <Layout>
            <Header className="header-menu">
                <NavLink to="/" className="left-menu">
                    <Title>DNTV</Title>
                </NavLink>
                <NavHeader />
            </Header>
            <Content className="content">{children}</Content>
            <Footer className="text-center">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};

export default withRouter(HomeLayout);

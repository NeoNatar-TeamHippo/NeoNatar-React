import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

const { Content, Header, Footer } = Layout;

const HomeLayout = props => (
    <Layout>
        <Header className="header">
            <HeaderComponent />
        </Header>
        <Content className="content">{props.children}</Content>
        <Footer className="footer text-center">
            <FooterComponent />
        </Footer>
    </Layout>
);
export default HomeLayout;

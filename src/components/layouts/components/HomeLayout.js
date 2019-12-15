import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import NavHeader from './Header';
import FooterComponent from './Footer';

const { Content, Footer, Header } = Layout;

const HomeLayout = props => {
    const { children } = props;
    return (
        <Layout>
            <Header>
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

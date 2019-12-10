import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

import navbar from '../../navbar';
import FooterComponent from './Footer';

const { Content, Footer } = Layout;
const { Navbar } = navbar.components;

const App = props => {
    const { children } = props;
    return (
        <Layout>
            <Navbar />
            <Content className="content">{children}</Content>
            <Footer className="footer text-center">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};

export default withRouter(App);

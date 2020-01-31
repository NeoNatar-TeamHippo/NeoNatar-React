import React from 'react';
import { Layout } from 'antd';
import { withRouter, NavLink } from 'react-router-dom';

import NavHeader from './Header';
import FooterComponent from './Footer';

import Logo from '../../../images/neoNatar Logo.svg';

const { Footer, Header } = Layout;

const HomeLayout = props => {
    const { children } = props;
    return (
        <Layout>
            <Header className="header-menu">
                <NavLink to="/dashboard" className="left-menu">
                    <img src={Logo} width="100%" height="30px" alt="NeoNatar Logo" />
                </NavLink>
                <NavHeader />
            </Header>
            <div className="content">{children}</div>
            <Footer className="text-center">
                <FooterComponent />
            </Footer>
        </Layout>
    );
};

export default withRouter(HomeLayout);

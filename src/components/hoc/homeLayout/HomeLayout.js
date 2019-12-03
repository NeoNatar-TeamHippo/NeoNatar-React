import React from 'react';
import { Layout, Typography } from 'antd';
import { FOOTER_TEXT } from './constants';
import Logo from '../../../images/neoNatar Logo.svg';

const { Content, Header, Footer } = Layout;
const { Text } = Typography;
const HomeLayout = props => (
    <Layout>
        <Header className="header">
            <img src={Logo} width="120px" height="60px" alt="NeoNatar Logo" />
        </Header>
        <Content className="content">{props.children}</Content>
        <Footer className="footer text-center">
            <Typography>
                <Text strong>
                    {FOOTER_TEXT}
                </Text>
            </Typography>
        </Footer>
    </Layout>
);
export default HomeLayout;

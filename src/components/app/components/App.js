import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

const { Content } = Layout;

class App extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Content>{children}</Content>
            </Layout>
        );
    }
}

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default withRouter(App);

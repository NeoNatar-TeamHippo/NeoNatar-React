import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Typography, Button, Alert } from 'antd';
import SignInForm from './Form';
import { SIGN_UP, ACCOUNT_TEXT, SIGN_IN, CENTER_CARD } from '../constants';
import layouts from '../../layouts';

const { HomeLayout } = layouts.components;

const { Title, Text } = Typography;
const SignIn = () => {
    const { errors } = useSelector(state => state.signUp);
    // TODO: abstract handle alert to a resuable function taking the errors as a paramter,
    // use it in signin and signup
    const handleAlert = () => {
        let alertTemplate = '';
        if (Object.keys(errors).length !== 0) {
            alertTemplate = (
                <Alert
                    message={errors.message}
                    type="error"
                    showIcon
                    banner
                    closeText="close"
                />
            );
        }
        return alertTemplate;
    };
    return (
        <HomeLayout>
            <div className="card_background">
                <Row type="flex" justify="center" align="middle">
                    <Col xs={18} md={12} lg={8}>
                        <Card className={CENTER_CARD}>
                            {handleAlert()}
                            <Title level={2}>
                                {SIGN_IN}
                            </Title>
                            <SignInForm />
                            <Text>
                                {ACCOUNT_TEXT}
                                <Link to="/signup">
                                    <Button type="link">
                                        {SIGN_UP}
                                    </Button>
                                </Link>
                            </Text>
                        </Card>
                    </Col>
                </Row>
            </div>
        </HomeLayout>
    );
};
export default SignIn;

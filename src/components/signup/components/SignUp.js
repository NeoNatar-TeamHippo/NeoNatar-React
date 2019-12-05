import React from 'react';
import { Card, Row, Col, Typography, Button, Alert } from 'antd';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeLayout from '../../hoc/homeLayout';
import SignUpForm from './Form';
import { SIGN_UP, ACCOUNT_TEXT, SIGN_IN } from '../constants';

const { Title, Text } = Typography;
const SignUp = () => {
    const { errors } = useSelector(state => state.signUp);
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
                        <Card className="signup_card">
                            {handleAlert()}
                            <Title level={2}>
                                {SIGN_UP}
                            </Title>
                            <SignUpForm />
                            <Text>
                                {ACCOUNT_TEXT}
                                <Button type="link">
                                    {SIGN_IN}
                                </Button>
                            </Text>
                        </Card>
                    </Col>
                </Row>
            </div>
        </HomeLayout>
    );
};

export default SignUp;

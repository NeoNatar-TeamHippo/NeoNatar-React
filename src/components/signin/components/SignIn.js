import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Typography, Button } from 'antd';

import SignInForm from './Form';

import { SIGN_UP, ACCOUNT_TEXT, SIGN_IN } from '../constants';

import layouts from '../../layouts';

const { HomeLayout } = layouts.components;

const { Title, Text } = Typography;
const SignIn = () => (
    <HomeLayout>
        <div className="card_background">
            <Row type="flex" justify="center" align="middle">
                <Col xs={18} md={12} lg={8}>
                    <Card className="center_card">
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

export default SignIn;

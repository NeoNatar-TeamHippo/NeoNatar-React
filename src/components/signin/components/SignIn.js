import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import SignInForm from './Form';
import { SIGN_UP, ACCOUNT_TEXT, SIGN_IN, CENTER_CARD } from '../constants';

const { Title, Text } = Typography;
const SignIn = () => (
    <div className="card_background">
        <Row type="flex" justify="center" align="middle">
            <Col xs={18} md={12} lg={8}>
                <Card className={CENTER_CARD}>
                    <Title level={2}>
                        {SIGN_IN}
                    </Title>
                    <SignInForm />
                    <Text>
                        {ACCOUNT_TEXT}
                        <Button type="link">
                            {SIGN_UP}
                        </Button>
                    </Text>
                </Card>
            </Col>
        </Row>
    </div>
);

export default SignIn;

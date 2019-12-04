import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import HomeLayout from '../../hoc/homeLayout';
import SignUpForm from './Form';
import { SIGN_UP, ACCOUNT_TEXT, SIGN_IN } from '../constants';

const { Title, Text } = Typography;
const SignUp = () => (
    <HomeLayout>
        <Row type="flex" justify="center">
            <Col xs={18} md={12} lg={8}>
                <Card className="signup_card">
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
    </HomeLayout>
);

export default SignUp;

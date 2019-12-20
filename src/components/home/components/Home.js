import React from 'react';
import { Button, Card, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import layouts from '../../layouts';

import { SIGNIN, SIGNUP, TITLE_TEXT, CARD_SUBTITLE } from '../constants';

const { HomeLayout } = layouts.components;

const Home = () => (
    <HomeLayout>
        <div className="card_background">
            <Row type="flex" justify="center" align="middle">
                <Col xs={18} md={12} lg={8}>
                    <Card
                        className="center_card"
                        title={TITLE_TEXT}
                    >
                        <div className="my-5">
                            <Typography.Text type="secondary">{CARD_SUBTITLE}</Typography.Text>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Button type="ghost">
                                <Link to="/signin">
                                    {SIGNIN}
                                </Link>
                            </Button>
                            <Button type="primary">
                                <Link to="/signup">
                                    {SIGNUP}
                                </Link>
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    </HomeLayout>
);
export default Home;

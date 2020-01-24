import React from 'react';
import { Row, Col, Divider } from 'antd';

import layouts from '../../layouts';
import art from '../../../images/illustration.png';
import text from '../../../images/text.png';

const { HomeLayout } = layouts.components;

const Home = () => (
    <HomeLayout>
        <div>
            <Row className="section-one">
                <Col span={12}>
                    <img src={text} alt="dummy-text" />
                </Col>
                <Col className="image-container hide-image-container" span={12}>
                    <img src={art} alt="illustration" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <img src={text} alt="dummy-text" />
                </Col>
                <Col className="image-container hide-image-container" span={12}>
                    <img src={art} alt="illustration" />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={12}>
                    <img src={text} alt="dummy-text" />
                </Col>
                <Col className="image-container hide-image-container" span={12}>
                    <img src={art} alt="illustration" />
                </Col>
            </Row>
        </div>
    </HomeLayout>
);

export default Home;

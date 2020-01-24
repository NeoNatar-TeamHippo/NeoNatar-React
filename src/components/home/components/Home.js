import React from 'react';
import { Row, Col, Divider, Typography} from 'antd';

import layouts from '../../layouts';
import art from '../../../images/office-setting.png';
import text from '../../../images/text.png';

const { HomeLayout } = layouts.components;
const { Title } = Typography;

const Home = () => (
    <HomeLayout>
        <div>
            <Row type="flex" align="middle" className="section-one">
                <Col span={12}>
                    <Title>Get Your Business Out</Title>
                    <Title type="secondary" level={4}>
                        Follow up on your campaigns by keeping a day to day record of your visitors
                    </Title>
                </Col>
                <Col span={12}>
                    <img src={art} alt="illustration" />
                </Col>
            </Row>
            <Row type="flex" align="middle" className="section-two">
                <Col span={12}>
                    <img src={art} alt="illustration" />
                </Col>
                <Col span={12}>
                    <img src={text} alt="dummy-text" />
                </Col>
            </Row>
            <Divider />
            <Row type="flex" align="middle" className="section-three">
                <Col span={12}>
                    <img src={text} alt="dummy-text" />
                </Col>
                <Col span={12}>
                    <img src={art} alt="illustration" />
                </Col>
            </Row>
        </div>
    </HomeLayout>
);

export default Home;

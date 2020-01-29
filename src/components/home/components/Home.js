import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import { LANDING_TILE, DUMMY_TITLE, DUMMY_DESCRIPTION } from '../constants';
import layouts from '../../layouts';
import art from '../../../images/office-setting.png';
import screen from '../../../images/svgs/undraw_composition_oskp.svg';
import placed from '../../../images/svgs/undraw_right_places_h9n3.svg';

const { HomeLayout } = layouts.components;
const { Title } = Typography;

const Home = () => (
    <HomeLayout>
        <div>
            <Row type="flex" align="middle" className="section-one">
                <Col span={12}>
                    <Title className="home-page-title">{LANDING_TILE}</Title>
                    <Title className="home-page-text" type="secondary" level={4}>
                        {DUMMY_DESCRIPTION}
                    </Title>
                </Col>
                <Col span={12}>
                    <img src={art} alt="illustration" />
                </Col>
            </Row>
            <Row type="flex" align="middle" className="section-two">
                <Col span={12}>
                    <img src={screen} alt="illustration" className="home-page-text screen-image" />
                </Col>
                <Col span={12}>
                    <Title className="home-page-text">{DUMMY_TITLE}</Title>
                    <Title className="home-page-text" type="secondary" level={4}>
                        {DUMMY_DESCRIPTION}
                    </Title>
                </Col>
            </Row>
            <Divider />
            <Row type="flex" align="middle" className="section-three">
                <Col span={12}>
                    <Title className="home-page-text">{DUMMY_TITLE}</Title>
                    <Title className="home-page-text" type="secondary" level={4}>
                        {DUMMY_DESCRIPTION}
                    </Title>
                </Col>
                <Col span={12}>
                    <img src={placed} alt="illustration" className="screen-image" />
                </Col>
            </Row>
        </div>
    </HomeLayout>
);

export default Home;

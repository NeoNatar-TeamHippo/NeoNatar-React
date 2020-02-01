import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import LandingCarousel from './LandingCarousel';

import {
    DUMMY_DESCRIPTION,
    LANDING_TITLE,
    LANDING_DESCRIPTION,
    HALF_LANDING_TITLE,
    EXPLAINERS_TITLE
} from '../constants';

import layouts from '../../layouts';

import screen from '../../../images/svgs/undraw_composition_oskp.svg';
import solution from '../../../images/svgs/undraw_our_solution_htvp.svg';

const { HomeLayout } = layouts.components;
const { Title } = Typography;

const Home = () => (
    <HomeLayout>
        <div className="landing-class">
            <Row type="flex" align="middle" className="section-one">
                <Col span={12}>
                    <Title className="home-page-title">{LANDING_TITLE}</Title>
                    <Title className="home-page-text" type="secondary" level={4}>
                        {LANDING_DESCRIPTION}
                    </Title>
                </Col>
                <Col span={12}>
                    <img src={screen} alt="illustration" className="home-page-text screen-image" />
                </Col>
            </Row>
            <Row type="flex" align="middle" className="section-two">
                <Col span={12}>
                    <LandingCarousel className="screen-image" />
                </Col>
                <Col span={12}>
                    <Title className="home-page-title">{HALF_LANDING_TITLE}</Title>
                    <Title className="home-page-text" type="secondary" level={4}>
                        {DUMMY_DESCRIPTION}
                    </Title>
                </Col>
            </Row>
            <Divider />
            <Row type="flex" align="middle" className="section-three">
                <Col span={12}>
                    <Title className="home-page-title">{EXPLAINERS_TITLE}</Title>
                    <Title className="home-page-text" type="secondary" level={4}>
                        {DUMMY_DESCRIPTION}
                    </Title>
                </Col>
                <Col span={12}>
                    <img
                        src={solution}
                        alt="illustration"
                        className="home-page-text screen-image"
                    />
                </Col>
            </Row>
        </div>
    </HomeLayout>
);

export default Home;

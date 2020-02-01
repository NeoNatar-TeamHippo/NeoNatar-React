import React from 'react';
import { Row, Col, Divider, Typography, Icon } from 'antd';

import LandingCarousel from './LandingCarousel';

import {
    DUMMY_DESCRIPTION,
    LANDING_TITLE,
    LANDING_DESCRIPTION,
    HALF_LANDING_TITLE,
    EXPLAINERS_TITLE,
    HALF_LANDING_ITEMS
} from '../constants';

import layouts from '../../layouts';

import screen from '../../../images/svgs/undraw_composition_oskp.svg';
import solution from '../../../images/svgs/undraw_our_solution_htvp.svg';

const { HomeLayout } = layouts.components;
const { Title, Text } = Typography;

const Home = () => {
    const halfLandingItems = items => (
        items.map(({ description, iconType, title }) => (
            <div key={title} className="half-landing-div">
                <Icon type={iconType} theme="twoTone" twoToneColor="#c41d7f" />
                <span className="half-landing-text">
                    {title}
                </span>
                <br />
                <Text>{description}</Text>
            </div>
        )));

    return (
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
                        <img
                            src={screen}
                            alt="illustration"
                            className="home-page-text screen-image"
                        />
                    </Col>
                </Row>
                <Row type="flex" align="middle" className="section-two">
                    <Col span={12}>
                        <LandingCarousel className="screen-image" />
                    </Col>
                    <Col span={12}>
                        <Title className="home-page-title">{HALF_LANDING_TITLE}</Title>
                        {halfLandingItems(HALF_LANDING_ITEMS)}
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
};
export default Home;

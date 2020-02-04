import React from 'react';
import { Button, Carousel, Row, Col, Divider, Typography, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import LandingCarousel from './LandingCarousel';

import {
    LANDING_TITLE,
    LANDING_DESCRIPTION,
    HALF_LANDING_TITLE,
    EXPLAINERS_TITLE,
    HALF_LANDING_ITEMS,
    SIGNUP_NOW,
    EXPLAINER_ITEMS,
    TESTIMONIALS,
    TESTIMONIAL_ITEMS
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

    const explainerItems = items => (
        items.map(({ description, key }) => (
            <li key={key} className="half-landing-div">
                <p>{description}</p>
            </li>
        )));

    const testimonialItems = items => (
        items.map(({ company, name, testimonial }) => (
            <Row key={name} type="flex" align="middle">
                <Col span={12}>
                    <span className="testimonial-id">
                        <Title level={2}>{name}</Title>
                        <Divider type="vertical" className="testimonial-divider" />
                        <Title level={3}>{company}</Title>
                    </span>
                </Col>
                <Col span={12}>
                    <Title level={3} className="testimonial-text">{testimonial}</Title>
                </Col>
            </Row>
        )));

    return (
        <HomeLayout>
            <div className="landing-class">
                <Row type="flex" align="middle" className="section-one">
                    <Col span={12}>
                        <Title className="home-page-text">{LANDING_TITLE}</Title>
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
                        <Title>{EXPLAINERS_TITLE}</Title>
                        {halfLandingItems(HALF_LANDING_ITEMS)}
                        <Button className="half-landing-button" type="primary">
                            <NavLink to="/signup">
                                <Title level={2}>{SIGNUP_NOW}</Title>
                            </NavLink>
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Row type="flex" align="middle" className="section-three">
                    <Col span={12}>
                        <Title className="home-page-text">{HALF_LANDING_TITLE}</Title>
                        <ul>
                            {explainerItems(EXPLAINER_ITEMS)}
                        </ul>
                    </Col>
                    <Col span={12}>
                        <img
                            src={solution}
                            alt="illustration"
                            className="home-page-text screen-image"
                        />
                    </Col>
                </Row>
                <div className="section-four">
                    <Title className="home-page-text">{TESTIMONIALS}</Title>
                    <Carousel autoplay>
                        {testimonialItems(TESTIMONIAL_ITEMS)}
                    </Carousel>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Home;

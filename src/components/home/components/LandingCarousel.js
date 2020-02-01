import React from 'react';
import { Card, Carousel, Spin } from 'antd';

const LandingCarousel = () => (
    <Card
        hoverable
        className="w-100"
        cover={(
            <Carousel autoplay>
                <Spin size="large" tip="Loading..." />
            </Carousel>
        )}
    />
);

export default LandingCarousel;

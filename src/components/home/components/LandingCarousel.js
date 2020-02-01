import React from 'react';
import { Card, Carousel } from 'antd';

import { IMAGES } from '../constants';

const LandingCarousel = () => {
    const renderImages = images => images.map(({ image, key }) => (
        <img
            key={key}
            alt={image}
            src={image}
            style={{
                objectFit: 'cover',
            }}
            className="card-carousel"
        />
    ));
    return (
        <Card
            hoverable={false}
            bordered={false}
            className="w-100 home-page-section"
            cover={(
                <Carousel autoplay>
                    {renderImages(IMAGES)}
                </Carousel>
        )}
        />
    );
};

export default LandingCarousel;

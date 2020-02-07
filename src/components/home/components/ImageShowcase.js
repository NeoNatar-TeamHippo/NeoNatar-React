import React from 'react';
import { Typography } from 'antd';

const ImageShowcase = () => (
    <section className="showcase">
        <div className="container-fluid p-0">
            <div className="row no-gutters">

                <div className="col-lg-6 order-lg-2 text-white showcase-img" />
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <Typography.Title level={2}>
                        Fully Responsive Design
                    </Typography.Title>
                    <Typography.Text className="lead mb-0" type="secondary">
                        When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
                    </Typography.Text>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-6 text-white showcase-img" />
                <div className="col-lg-6 my-auto showcase-text">
                    <Typography.Title level={2}>
                        Updated For Bootstrap 4
                    </Typography.Title>
                    <Typography.Text className="lead mb-0" type="secondary">
                        Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!
                    </Typography.Text>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" />
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <Typography.Title level={2}>
                        Easy to Use &amp; Customize
                    </Typography.Title>
                    <Typography.Text className="lead mb-0" type="secondary">
                        Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!
                    </Typography.Text>
                </div>
            </div>
        </div>
    </section>
);
export default ImageShowcase;

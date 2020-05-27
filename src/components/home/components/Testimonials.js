import React from 'react';
import { Typography, Card } from 'antd';

import { TESTIMONIAL_ITEMS, PEOPLE } from '../constants';

const Testimonials = () => (
    <section className="testimonials text-center bg-light">
        <div className="container">
            <Typography.Title level={1} className="mb-5">
                {PEOPLE}
            </Typography.Title>
            <div className="row">
                {
                    TESTIMONIAL_ITEMS.map(({ company, name, testimonial, image }) => (
                        <div key={image} className="col-lg-4 my-3">
                            <Card>
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img
                                        className=" rounded-circle mb-3"
                                        width="200px"
                                        height="200px"
                                        src={image}
                                        alt="first testimonial"
                                    />
                                    <Typography.Title className="mb-0" level={4}>
                                        {name}
                                    </Typography.Title>
                                    <Typography.Text type="secondary">
                                        {company}
                                    </Typography.Text>
                                    <Typography.Paragraph className="font-weight-light my-2">
                                        {testimonial}
                                    </Typography.Paragraph>
                                </div>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
);
export default Testimonials;

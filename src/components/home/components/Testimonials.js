import React from 'react';
import { Typography, Card } from 'antd';
import mathew from '../../../images/testimonials/mathew.jpeg';
import ogbunwale from '../../../images/testimonials/ogbunwale.jpeg';
import benjamin from '../../../images/testimonials/benjamin.jpeg';
import johnson from '../../../images/testimonials/johnson.jpeg';
import fisayo from '../../../images/testimonials/fisayo.jpeg';
import johnale from '../../../images/testimonials/johnale.jpeg';

const Testimonials = () => (
    <section className="testimonials text-center bg-light">
        <div className="container">
            <Typography.Title level={1} className="mb-5">
                What people are saying...
            </Typography.Title>
            <div className="row">
                <div className="col-lg-4 my-3">
                    <Card>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className=" rounded-circle mb-3" width="200px" height="200px" src={benjamin} alt="first testimonial" />
                            <Typography.Title className="mb-0" level={4}>
                                Benjamin Okorafor
                            </Typography.Title>
                            <Typography.Text type="secondary">
                                Pipul TV
                            </Typography.Text>
                            <Typography.Paragraph className="font-weight-light my-2">
                                "This is so much value for money. It is a combination of technology, reach, engagements, convenience, flexibility and affordability."
                            </Typography.Paragraph>

                        </div>

                    </Card>
                </div>
                <div className="col-lg-4 my-3">
                    <Card>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="rounded-circle mb-3" src={ogbunwale} height="200px" width="200px" alt="first testimonial" />
                            <Typography.Title className="mb-0" level={4}>
                                Ogunbowale Olugbenga
                            </Typography.Title>
                            <Typography.Text type="secondary">
                                ePower
                            </Typography.Text>
                            <Typography.Paragraph className="font-weight-light my-2">
                                "Streaming content and ads side by side, is definitely a thing to work with, for anyone that understands what content does to ads."
                            </Typography.Paragraph>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-4 my-3">
                    <Card>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className=" rounded-circle mb-3" width="200px" height="200px" src={johnson} alt="first testimonial" />
                            <Typography.Title className="mb-0" level={4}>
                                Johnson Alabi
                            </Typography.Title>
                            <Typography.Text type="secondary">
                                AceRide
                            </Typography.Text>
                            <Typography.Paragraph className="font-weight-light my-2">
                                "As everything is rapidly going online, this is one of the best affordable reasons to retain offline in our company's budget."
                            </Typography.Paragraph>

                        </div>
                    </Card>

                </div>
                <div className="col-lg-4 my-3">
                    <Card>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className=" rounded-circle mb-3" width="200px" height="200px" src={fisayo} alt="first testimonial" />
                            <Typography.Title className="mb-0" level={4}>
                                Fisayo Olaleye
                            </Typography.Title>
                            <Typography.Text type="secondary">
                                Heritage Bank
                            </Typography.Text>
                            <Typography.Paragraph className="font-weight-light my-2">
                                "It is a good way for brands to use content as an attraction, on one channel, to show ads to its customers on another channel."
                            </Typography.Paragraph>
                        </div>
                    </Card>

                </div>
                <div className="col-lg-4 my-3">
                    <Card>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className=" rounded-circle mb-3" width="200px" height="200px" src={johnale} alt="first testimonial" />
                            <Typography.Title className="mb-0" level={4}>
                                Joshua Ale
                            </Typography.Title>
                            <Typography.Text type="secondary">
                                Dove
                            </Typography.Text>
                            <Typography.Paragraph className="font-weight-light my-2">
                                "We had plans to do gadget videos but traditional TV is too expensive for us. We chose this because we have a target audience"
                            </Typography.Paragraph>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-4 my-3">
                    <Card>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className=" rounded-circle mb-3" width="200px" height="200px" src={mathew} alt="first testimonial" />
                            <Typography.Title className="mb-0" level={4}>
                                Mathew Igba
                            </Typography.Title>
                            <Typography.Text type="secondary">
                                Peak Tutors
                            </Typography.Text>
                            <Typography.Paragraph className="font-weight-light my-2">
                                "We are using this platform as an Avenue to show tutorial videos, to our target audience in restaurants they visit."
                            </Typography.Paragraph>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
);
export default Testimonials;

import React from 'react';
import { Card, Typography } from 'antd';

const IconsGrid = () => (
    <section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <Card
                        style={{
                            height: '300px',
                        }}
                        hoverable
                    >
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="fas fa-mobile-alt m-auto" />
                                {/* <i className="icon-screen-desktop m-auto text-primary" /> */}
                            </div>
                            <Typography.Title level={3}>
                                Convenience
                            </Typography.Title>
                            <Typography.Text className="lead mb-0" type="secondary">
                                Create, upload and manage campaign videos from your mobile phone.
                            </Typography.Text>
                        </div>
                    </Card>

                </div>
                <div className="col-lg-4">
                    <Card
                        hoverable
                        style={{
                            height: '300px',
                        }}
                    >
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-layers m-auto" />
                            </div>
                            <Typography.Title level={3}>
                                Targeting
                            </Typography.Title>
                            <Typography.Text className="lead mb-0" type="secondary">
                                Target specific restaurant locations.
                            </Typography.Text>
                        </div>
                    </Card>

                </div>
                <div className="col-lg-4">
                    <Card
                        hoverable
                        style={{
                            height: '300px',
                        }}
                    >
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div
                                className="features-icons-icon d-flex"
                            >
                                <i
                                    className="fas fa-wallet m-auto"

                                />
                            </div>
                            <Typography.Title level={3}>
                                Pocket Friendly
                            </Typography.Title>
                            <Typography.Text className="lead mb-0" type="secondary">
                                Advertise at N45 per day per location (promo).
                            </Typography.Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </section>
);

export default IconsGrid;

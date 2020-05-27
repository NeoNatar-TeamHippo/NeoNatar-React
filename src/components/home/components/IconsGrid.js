import React from 'react';
import { Card, Typography } from 'antd';
import { HALF_LANDING_ITEMS } from '../constants';

const IconsGrid = () => (
    <section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                {
                    HALF_LANDING_ITEMS.map(({ description, iconClass, title }) => (
                        <div key={title} className="col-lg-4">
                            <Card
                                style={{
                                    height: '300px',
                                }}
                                hoverable
                            >
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <i className={iconClass} />
                                    </div>
                                    <Typography.Title level={3}>
                                        {title}
                                    </Typography.Title>
                                    <Typography.Text className="lead mb-0" type="secondary">
                                        {description}
                                    </Typography.Text>
                                </div>
                            </Card>
                        </div>
                    ))

                }
            </div>
        </div>
    </section>
);

export default IconsGrid;

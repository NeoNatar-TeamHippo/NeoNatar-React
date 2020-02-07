import React from 'react';
import { Typography, Button } from 'antd';
import { SIGNUP } from '../constants';

const GettingStarted = () => (
    <section className="call-to-action text-white text-center">
        <div className="overlay" />
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <Typography.Title
                        className="mb-4"
                        level={2}
                        style={{
                            color: 'white',
                        }}
                    >
                        Ready to get more customers ? Get started now!!!
                    </Typography.Title>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Button type="primary" block size="large">
                            {SIGNUP}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default GettingStarted;

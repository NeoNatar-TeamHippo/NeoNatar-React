import React from 'react';
import { Button, Typography } from 'antd';
import { LANDING_TITLE, EXPLAINERS_TITLE, LEARN_HOW } from '../constants';

const HeaderSection = () => (
    <header className="masthead text-white text-center">
        {/* <div className="overlay" /> */}
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <Typography.Title
                        className="mb-2"
                        level={1}
                    >
                        {LANDING_TITLE}
                    </Typography.Title>
                    <Typography.Title
                        level={3}
                        className="mb-5"
                    >
                        {EXPLAINERS_TITLE}
                    </Typography.Title>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Button type="primary" block size="large">
                            {LEARN_HOW}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
export default HeaderSection;

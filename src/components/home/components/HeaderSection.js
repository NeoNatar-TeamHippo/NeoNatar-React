import React from 'react';
import { Button, Typography } from 'antd';
import { NavLink } from 'react-router-dom';

import { LANDING_TITLE, EXPLAINERS_TITLE, GET_STARTED, SIGNUP_PATH } from '../constants';

const HeaderSection = () => (
    <header className="masthead text-white text-center">
        {/* <div className="overlay" /> */}
        <div className="container">
            <div className="row">
                <div className="mx-auto">
                    <Typography.Title
                        className="mb-2 landing-title"
                        level={2}
                    >
                        {LANDING_TITLE}
                    </Typography.Title>
                    <Typography.Title
                        level={4}
                        className="mb-5 landing-title"
                    >
                        {EXPLAINERS_TITLE}
                    </Typography.Title>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Button type="primary" ghost block size="large" className="button-class">
                            <NavLink to={SIGNUP_PATH}>
                                {GET_STARTED}
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
export default HeaderSection;

import React from 'react';
import { Typography } from 'antd';

import { FOOTER_TEXT } from '../constants';

const Footer = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                        <a href="#">About</a>
                    </li>
                    <li className="list-inline-item">&sdot;</li>
                    <li className="list-inline-item">
                        <a href="#">Contact</a>
                    </li>
                    <li className="list-inline-item">&sdot;</li>
                    <li className="list-inline-item">
                        <a href="#">Terms of Use</a>
                    </li>
                    <li className="list-inline-item">&sdot;</li>
                    <li className="list-inline-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <Typography.Text className="mb-4 mb-lg-0" type="secondary" strong>
                    {FOOTER_TEXT}
                </Typography.Text>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-3">
                        <a href="#">
                            <i className="fab fa-facebook fa-2x fa-fw" />
                        </a>
                    </li>
                    <li className="list-inline-item mr-3">
                        <a href="#">
                            <i className="fab fa-twitter-square fa-2x fa-fw" />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">
                            <i className="fab fa-instagram fa-2x fa-fw" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;

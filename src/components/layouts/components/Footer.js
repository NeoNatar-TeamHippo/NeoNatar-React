import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import { FOOTER_TEXT } from '../constants';

const Footer = () => (
    <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/"> About</Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/"> Contact</Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/"> Terms of Use</Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/"> Privacy Policy</Link>
                </li>
            </ul>
            <Typography.Text className="mb-4 mb-lg-0" type="secondary" strong>
                {FOOTER_TEXT}
            </Typography.Text>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                    <Link to="/">
                        <i className="fab fa-facebook fa-2x fa-fw" />
                    </Link>
                </li>
                <li className="list-inline-item mr-3">
                    <Link to="/">
                        <i className="fab fa-twitter-square fa-2x fa-fw" />
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/">
                        <i className="fab fa-instagram fa-2x fa-fw" />
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

export default Footer;

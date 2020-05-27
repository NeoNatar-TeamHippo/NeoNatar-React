import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import { FOOTER_TEXT, ABOUT, CONTACT, TERMS, PRIVACY, TV_PLATFORM } from '../constants';

const Footer = () => (
    <div className="row footer-items">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/">{ABOUT}</Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/">{CONTACT}</Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/">{TERMS}</Link>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                    <Link to="/">{PRIVACY}</Link>
                </li>
            </ul>
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

        <Typography.Text className="mb-4 mb-lg-0 copyright-class" type="secondary" strong>
            {FOOTER_TEXT}
            <br />
            {TV_PLATFORM}
        </Typography.Text>
    </div>
);

export default Footer;

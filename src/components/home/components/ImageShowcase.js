import React from 'react';
import { Typography } from 'antd';
import onlinePlay from '../../../images/svgs/undraw_content_vbqo.svg';
import personalfinance from '../../../images/svgs/undraw_personal_finance_tqcd.svg';
import {
    WHATSAPP_MARKETING,
    WHATSAPP_MARKETING_DESCRIPTION,
    WIDE_REACH, WIDE_REACH_DESCRIPTION
} from '../constants';

const ImageShowcase = () => (
    <section className="showcase">
        <div className="container-fluid p-0">
            <div className="row no-gutters">

                <div className="col-lg-6 order-lg-2 text-white showcase-img">
                    <div className="p-4">
                        <img src={onlinePlay} alt="online play" width="100%" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <Typography.Title level={3}>
                        {WHATSAPP_MARKETING}
                    </Typography.Title>
                    <Typography.Text className="lead mb-0">
                        {WHATSAPP_MARKETING_DESCRIPTION}
                    </Typography.Text>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-6 text-white showcase-img">
                    <div className="p-4">
                        <img src={personalfinance} alt="addcontent play" width="80%" />
                    </div>
                </div>
                <div className="col-lg-6 my-auto showcase-text">
                    <Typography.Title level={3}>
                        {WIDE_REACH}
                    </Typography.Title>
                    <Typography.Text className="lead mb-0">
                        {WIDE_REACH_DESCRIPTION}
                    </Typography.Text>
                </div>
            </div>
        </div>
    </section>
);
export default ImageShowcase;

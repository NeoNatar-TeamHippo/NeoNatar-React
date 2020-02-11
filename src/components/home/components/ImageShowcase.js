import React from 'react';
import { Typography } from 'antd';
import onlinePlay from '../../../images/svgs/undraw_content_vbqo.svg';
import personalfinance from '../../../images/svgs/undraw_personal_finance_tqcd.svg';

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
                    <Typography.Title level={2}>
                        Content meets Ads
                    </Typography.Title>
                    <Typography.Text className="lead mb-0">
                        We show content along side, to ensure people stay glued to your Ads
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
                    <Typography.Title level={2}>
                        Low Cost Benefits
                    </Typography.Title>
                    <Typography.Text className="lead mb-0">
                        You can advertise for as low as 1 location for 1 day, if that is what you can afford.
                    </Typography.Text>
                </div>
            </div>
        </div>
    </section>
);
export default ImageShowcase;

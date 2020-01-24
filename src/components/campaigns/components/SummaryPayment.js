import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { REVIEW_TEXT, YOU_CAN_VIEW, OR_GO_TO, HERE, CREATED_SUCCESSFULLY } from '../constants';
import ILLUSTRATION_SVG from '../../../images/svgs/undraw_confirmation_2uy0.svg';

const SummaryPayment = () => (
    <div className="d-flex flex-column justify-content-around text-center">
        <div style={{
            width: '250px',
            height: '250px',
            margin: 'auto',
        }}
        >
            <img src={ILLUSTRATION_SVG} alt="Created successfully" width="100%" height="100%" />
        </div>
        <div className="my-2">
            <Typography.Text style={{
                color: '#3ACC6C', fontSize: '32px', fontWeight: '600',
            }}
            >
                {CREATED_SUCCESSFULLY}
            </Typography.Text>
        </div>
        <div>
            <Typography.Text type="secondary">
                {REVIEW_TEXT}
            </Typography.Text>
            <div>
                <Typography.Text type="secondary">
                    {YOU_CAN_VIEW}
                    <Link to="/dashboard/campaigns">{HERE}</Link>
                    {OR_GO_TO}
                </Typography.Text>
            </div>
        </div>
    </div>
);
export default SummaryPayment;

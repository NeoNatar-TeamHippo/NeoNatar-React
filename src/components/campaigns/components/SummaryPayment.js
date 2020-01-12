import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Typography } from 'antd';
import { REVIEW_TEXT, YOU_CAN_VIEW, OR_GO_TO, HERE } from '../constants';

const SummaryPayment = () => (
    <Result
        status="success"
        title="Campaign Created Successfully"
        subTitle={(
            <>
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
            </>
        )}
    />
);
export default SummaryPayment;

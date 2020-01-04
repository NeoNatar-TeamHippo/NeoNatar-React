import React, { useState } from 'react';
import { Tag, Table, Steps, Button, message, Icon } from 'antd';
import Campaigns from './Campaigns';
import UploadVideo from './UploadVideo';
import SummaryPayment from './SummaryPayment';
import SelectLocation from './SelectLocation';
import ScheduleCampaign from './ScheduleCampaign';

import { NEXT, DONE, PREVIOUS } from '../constants';

const { Step } = Steps;

const steps = [
    {
        content: <UploadVideo></UploadVideo>,
        title: 'Upload Video',
    },
    {
        content: <SelectLocation></SelectLocation>,
        title: 'Select Location',
    },
    {
        content: <ScheduleCampaign></ScheduleCampaign>,
        title: 'Schedule Campaign',
    },
    {
        content: <SummaryPayment></SummaryPayment>,
        title: 'Summary and Payment',
    },
];
const NewCampaigns = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        {NEXT}
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        {DONE}
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                        {PREVIOUS}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default NewCampaigns;

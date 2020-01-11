import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';

import { NEXT, DONE, PREVIOUS } from '../constants';

const { Step } = Steps;

const steps = [
    {
        content: 'First-content',
        title: 'Upload Video',
    },
    {
        content: 'Second-content',
        title: 'Select Location',
    },
    {
        content: '2nd to Last-content',
        title: 'Schedule Campaign',
    },
    {
        content: 'Last-content',
        title: 'Summary and Payment',
    },
];
const Campaigns = () => {
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

export default Campaigns;

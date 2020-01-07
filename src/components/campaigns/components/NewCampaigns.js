import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Steps, Button, message } from 'antd';
import UploadVideo from './UploadVideo';
import SummaryPayment from './SummaryPayment';
import SelectLocation from './SelectLocation';
import ScheduleCampaign from './ScheduleCampaign';
import { next, previous as prev, resetFormState } from '../actions'

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
    const dispatch = useDispatch()
    const { campaignDetails: { current } } = useSelector(state => state.campaigns);
    const handleDone = () => {
        message.success('Processing complete!');
        dispatch(resetFormState())
    }
    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action d-flex justify-content-center">
                {current > 0 && current !== steps.length - 1 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => dispatch(prev())}>
                        {PREVIOUS}
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => handleDone()}>
                        {DONE}
                    </Button>
                )}
            </div>
        </>
    );
};

export default NewCampaigns;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Steps, Button, message, Icon } from 'antd';
import UploadVideo from './UploadVideo';
import SummaryPayment from './SummaryPayment';
import SelectLocation from './SelectLocation';
import ScheduleCampaign from './ScheduleCampaign';
import { previous as prev, next, resetFormState } from '../actions';

import { DONE, PREVIOUS } from '../constants';

const { Step } = Steps;

const steps = [
    {
        content: <UploadVideo />,
        icon: 'play-square',
        title: 'Upload Video',
    },
    {
        content: <SelectLocation />,
        icon: 'environment',
        title: 'Select Location',
    },
    {
        content: <ScheduleCampaign />,
        icon: 'sound',
        title: 'Schedule Campaign',
    },
    {
        content: <SummaryPayment />,
        icon: 'file-done',
        title: 'Summary and Payment',
    },
];
const NewCampaigns = () => {
    const dispatch = useDispatch();
    const { campaignDetails: { current } } = useSelector(state => state.campaigns);
    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} icon={<Icon type={item.icon} />} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <Button onClick={() => dispatch(next())}>
                next
            </Button>
        </>
    );
};

export default NewCampaigns;

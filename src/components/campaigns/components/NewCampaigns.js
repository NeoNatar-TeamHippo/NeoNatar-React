import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Steps, Icon } from 'antd';

import UploadVideo from './UploadVideo';
import SummaryPayment from './SummaryPayment';
import SelectLocation from './SelectLocation';
import ScheduleCampaign from './ScheduleCampaign';

import { getCommercial } from '../../commercials/actions';
import { getSavedLocations } from '../../savedLocations/actions';

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
    const { user: { userId } } = useSelector(state => state.user);
    const { campaignDetails: { current } } = useSelector(state => state.campaigns);
    useEffect(() => {
        dispatch(getCommercial());
        dispatch(getSavedLocations({ userId }));
    }, [dispatch, userId]);

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} icon={<Icon type={item.icon} />} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
        </>
    );
};

export default NewCampaigns;

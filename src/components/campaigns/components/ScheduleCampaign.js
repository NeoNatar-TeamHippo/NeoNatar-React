import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Descriptions, Col, Row, Button, Tooltip, Typography, Select, Divider, message } from "antd";
import { SELECT_OPTIONS } from '../constants';
import { openNotification } from '../../utils/functions';
import { setAmount, next, resetFormState } from '../actions'
import PaystackButton from 'react-paystack';
const { Option } = Select;
const { Paragraph } = Typography
const apiKey = process.env.REACT_APP_PAYSTACK_KEY;
let newAmount = 0;
let finalAmount = 0;
const ScheduleCampaign = () => {
    const dispatch = useDispatch();
    const [selectOption, setselectOption] = useState(null);
    const {
        campaignDetails: { amount, title, videoDetails, locations, duration }
    } = useSelector(state => state.campaigns)
    const { locations: allLocations } = useSelector(state => state.location)
    const { user: { email } } = useSelector(state => state.user)
    const [newTitle, setnewTitle] = useState(videoDetails.title)
    const [localAmount, setlocalAmount] = useState(amount);
    const onChange = (value) => {
        setselectOption(value);
        newAmount = amount * value;
        finalAmount = amount * value * 100;
        setlocalAmount(newAmount);
        openNotification(`New Price Updated to ${newAmount}`, 'Update', 'success')
    }
    const onChangeTitle = (value) => {
        setnewTitle(value);
    }
    const renderSelectOptions = () => {
        return SELECT_OPTIONS.map((option) => {
            return (<Option key={option.value} value={option.value}>{option.title}</Option>)
        })
    }
    const renderCampaignLocation = () => {
        return allLocations.map((location) => {
            return locations.map((rowKey) => {
                if (location.locationId === rowKey) {
                    return (<div>
                        <Typography.Text className='mx-2'>{location.name}</Typography.Text>
                        <Divider type='vertical'></Divider>
                        <Typography.Text type='secondary' className='ml-3'>{location.state}</Typography.Text>
                    </div>)
                }
            })
        })
    }
    const callback = (response) => {
        if (response.status === 'success') {
            dispatch(next());
            setTimeout(() => {
                message.success('Payment successful, Thanks for working with us!!!');
            }, 1000);
            dispatch(resetFormState())
        }
        else {
            message.error('An error occurred please try again');
        }
    }

    const close = () => {
        message.error('The payment process was cancelled by you');
    }

    const getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
        for (let i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    return (
        <div className="mt-4">
            <Row type="flex" justify='center' align='middle'>
                <Col xs={24} md={14}>
                    <Descriptions title="Campaign Info" layout="vertical" bordered>
                        <Descriptions.Item label="Title">
                            <Paragraph editable={{ onChange: onChangeTitle }}>{newTitle}</Paragraph>
                        </Descriptions.Item>
                        <Descriptions.Item label="Video">
                            <Tooltip title='View Video'>
                                <Button type='link' onClick={() => console.log(videoDetails.url)}>
                                    {videoDetails.title}
                                </Button>
                            </Tooltip>
                        </Descriptions.Item>
                        <Descriptions.Item label="Amount"><span> &#8358;</span> {localAmount}</Descriptions.Item>
                        <Descriptions.Item label="Locations">
                            {renderCampaignLocation()}
                        </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Col xs={20} md={16} lg={10}>
                            <div className='mt-4'>
                                <Typography.Text strong >
                                    How long should your campaign last ?
                            </Typography.Text>
                                <Select
                                    className='w-100 mt-2'
                                    placeholder="Select Duration"
                                    onChange={onChange}
                                    defaultActiveFirstOption
                                >
                                    {renderSelectOptions()}
                                </Select>
                            </div>
                        </Col>
                    </Row>
                    <PaystackButton
                        text="Proceed To Payment"
                        class="ant-btn ant-btn-primary mt-4"
                        callback={callback}
                        close={close}
                        disabled={!selectOption}
                        embed={false}
                        reference={getReference()}
                        email={email}
                        amount={finalAmount}
                        paystackkey={apiKey}
                        tag="button"
                    />
                </Col>
            </Row>
        </div >
    )
}
export default ScheduleCampaign;

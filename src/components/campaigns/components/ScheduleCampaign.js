import React, { useState } from 'react'
import { Descriptions, Col, Row, Button, Tooltip, Typography, Select, Divider } from "antd";
import { SELECT_OPTIONS } from '../constants';
import { openNotification } from '../../utils/functions'
import PaystackButton from 'react-paystack';
const { Option } = Select;
const apiKey = process.env.REACT_APP_PAYSTACK_KEY;
const ScheduleCampaign = () => {
    const [selectOption, setselectOption] = useState(null)
    const onChange = (value) => {
        setselectOption(value);
        openNotification(`New Price Updated to ${1500 * value}`, 'Update')
    }
    const renderSelectOptions = () => {
        return SELECT_OPTIONS.map((option, index) => {
            return (<Option key={option.value} value={option.value}>{option.title}</Option>)
        })
    }
    const state = {
        email: "foobar1@example.com",
        amount: 100000 //equals NGN100 add 2 zero behind it,
    }

    const callback = (response) => {
        // move to the next page
        console.log(response);
    }

    const close = () => {
        console.log("Payment closed");
    }

    const getReference = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
        for (let i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    }
    return (
        <div className="mt-4">
            <Row type="flex" justify='center' align='middle'>
                <Col xs={24} md={16}>
                    <Descriptions title="Campaign Info" layout="vertical" bordered>
                        <Descriptions.Item label="Title">Exactly as depicted</Descriptions.Item>
                        <Descriptions.Item label="Video">
                            <Tooltip title='View Video'>
                                <Button type='link'>
                                    Paradigm
                                    </Button>
                            </Tooltip>
                        </Descriptions.Item>
                        <Descriptions.Item label="Amount"><span> &#8358;</span> 1500</Descriptions.Item>
                        <Descriptions.Item label="Locations">
                            <div>
                                <Typography.Text>Transcorp Hilton</Typography.Text>
                                <Typography.Text type='secondary' className='ml-3'>Abuja</Typography.Text>
                                <Divider type='vertical'></Divider>
                            </div>
                        </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Col xs={20} md={16} lg={8}>
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
                        email={state.email}
                        amount={state.amount}
                        paystackkey={apiKey}
                        tag="button"
                    />
                </Col>
            </Row>
        </div>
    )
}
export default ScheduleCampaign;

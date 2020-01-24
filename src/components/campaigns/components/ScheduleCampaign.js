import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import {
    Descriptions, Col, Row, Button, Tooltip, Typography, message,
    Tag, Modal, Slider, InputNumber
} from 'antd';
import PaystackButton from 'react-paystack';
import {
    REFERENCE_VALUE, CAMPAIGN_LENGTH_TEXT, PROCEED,
    PREVIOUS,
    TOTAL_AMOUNT_DUE,
    SHALL_WE_PROCEED,
    NAIRASIGN
} from '../constants';
import { next, resetFormState, createCampaign, previous as prev } from '../actions';
import { CANCEL } from '../../commercials/constants';

const { Paragraph } = Typography;
const apiKey = process.env.REACT_APP_PAYSTACK_KEY;
let newAmount = 0;
let finalAmount = 0;
const ScheduleCampaign = ({ history }) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const {
        campaignDetails: { amount, commercialId, videoDetails, locations },
    } = useSelector(state => state.campaigns);
    const { locations: allLocations } = useSelector(state => state.location);
    const { user: { email } } = useSelector(state => state.user);
    const [newTitle, setnewTitle] = useState(videoDetails.title);
    const [localAmount, setlocalAmount] = useState(amount);
    const [days, setdays] = useState(1);
    const onChange = value => {
        setdays(value);
        newAmount = amount * value;
        finalAmount = amount * value * 100;
        setlocalAmount(newAmount);
    };
    const onChangeTitle = value => {
        setnewTitle(value);
    };
    const renderCampaignLocation = () => {
        const newArray = [];
        allLocations.map(location => locations.map(rowKey => {
            if (location.locationId === rowKey) {
                newArray.push(location);
            }
            return false;
        }));
        const sortedLocations = newArray.sort((a, b) => a.name.localeCompare(b.name));
        return sortedLocations.map(location => (
            <Tag
                key={location.locationId}
                color="blue"
                className="my-1"
            >
                {location.name}
            </Tag>
        ));
    };
    const callback = response => {
        setVisible(false);
        if (response.status === 'success') {
            dispatch(next());
            const newCampaign = {
                commercialId,
                duration: 5,
                locationsSelected: locations,
                title: newTitle,
            };
            dispatch(createCampaign(newCampaign));
            message.success('Payment successful, Thanks for working with us!!!');
            setTimeout(() => {
                dispatch(resetFormState());
                history.push('/dashboard/campaigns');
            }, 5000);
        } else {
            message.error('An error occurred please try again');
        }
    };

    const close = () => {
        setVisible(false);
        message.error('The payment process was cancelled by you');
    };

    const getReference = () => {
        let text = '';
        const possible = REFERENCE_VALUE;
        for (let i = 0; i < 20; i += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    const handleProceed = () => {
        newAmount = amount * days;
        finalAmount = amount * days * 100;
        setlocalAmount(newAmount);
        setVisible(true);
    };
    return (
        <div className="mt-4">
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} md={14}>
                    <Descriptions
                        title="Campaign Info"
                        layout="vertical"
                        bordered
                        column={{ lg: 3, md: 3, sm: 2, xl: 3, xs: 1, xxl: 4 }}
                    >
                        <Descriptions.Item label="Title">
                            <Paragraph editable={{ onChange: onChangeTitle }}>{newTitle}</Paragraph>
                        </Descriptions.Item>
                        <Descriptions.Item label="Video">
                            <Tooltip title="View Video">
                                <Button type="link" onClick={() => console.log(videoDetails.url)}>
                                    {videoDetails.title}
                                </Button>
                            </Tooltip>
                        </Descriptions.Item>
                        <Descriptions.Item label="Initial Amount">
                            <Typography.Title className="total_text" level={4}>
                                <span className="mr-1">
                                    {ReactHtmlParser(NAIRASIGN)}
                                </span>
                                {amount}
                            </Typography.Title>
                        </Descriptions.Item>
                        <Descriptions.Item label="Amount Due">
                            <Typography.Title className="total_text" level={4}>
                                <span className="mr-1">
                                    {ReactHtmlParser(NAIRASIGN)}
                                </span>
                                {localAmount}
                            </Typography.Title>
                        </Descriptions.Item>

                        <Descriptions.Item label="Locations" span={3}>
                            {renderCampaignLocation()}
                        </Descriptions.Item>
                    </Descriptions>
                    <Row>
                        <Col xs={20} md={16} lg={10}>
                            <div className="mt-4">
                                <Typography.Text strong>
                                    {CAMPAIGN_LENGTH_TEXT}
                                </Typography.Text>
                                <Row type="flex" className="mt-2" gutter={[{ lg: 32, md: 24, sm: 16, xs: 8 }, 20]}>
                                    <Col sm={24} md={18} className='d-none d-lg-block'>
                                        <Slider
                                            min={1}
                                            max={60}
                                            onChange={onChange}
                                            style={{ marginRight: 16 }}
                                            value={typeof days === 'number' ? days : 0}
                                        />
                                    </Col>
                                    <Col sm={24} md={6}>
                                        <InputNumber
                                            min={1}
                                            max={60}
                                            value={days}
                                            formatter={value => `${value} ${days > 1
                                                ? 'days'
                                                : 'day'}`}
                                            onChange={onChange}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="my-1 d-flex justify-content-between">
                <Button onClick={() => dispatch(prev())}>
                    {PREVIOUS}
                </Button>
                <Button
                    type="primary"
                    onClick={() => handleProceed()}
                >
                    {PROCEED}
                </Button>
            </div>
            <Modal
                visible={visible}
                centered

                title="Confirm Price"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={[
                    <Button key="back" onClick={() => setVisible(false)}>
                        {CANCEL}
                    </Button>,
                    <PaystackButton
                        key="proceed"
                        text="Pay With Paystack"
                        class="ant-btn ant-btn-primary mt-4"
                        callback={callback}
                        close={close}
                        embed={false}
                        reference={getReference()}
                        email={email}
                        amount={finalAmount}
                        paystackkey={apiKey}
                        tag="button"
                    />,
                ]}
            >
                <div className="d-flex justify-content-center">
                    <div>
                        <Typography.Text className="mx-1">
                            {TOTAL_AMOUNT_DUE}
                        </Typography.Text>
                        <Typography.Text strong>
                            <span>{ReactHtmlParser(NAIRASIGN)}</span>
                            {newAmount}
                        </Typography.Text>
                        <Typography.Text className="mx-1">
                            {SHALL_WE_PROCEED}
                        </Typography.Text>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default withRouter(ScheduleCampaign);

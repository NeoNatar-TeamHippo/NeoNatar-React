import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Card, Row, Col, Form, Button, Typography, Tag, Modal, Select
} from 'antd';
import moment from 'moment';
import download from 'downloadjs';

import { getCampaignById, approveCampaign, disapproveCampaign } from '../actions';
import { statusColor } from '../../utils/functions';
import { LOCATIONS,
    APPROVECAMPAIGN,
    TITLE,
    BACK,
    CANCEL,
    DOWNLOAD,
    SUBMIT,
    PLACEHOLDER,
    OPTIONKEY,
    EXPIRES,
    APPROVED,
    VERTICAL,
    MESSAGE,
    DISAPPROVECAMPAIGN,
    LIVE,
    PEND,
    CREATEDAT,
    DURATION,
    DISAPPROVE,
    DISAPPROVED } from '../constants';

const { Option } = Select;
const { Item } = Form;

const ViewCampaignWithModal = ({ match, history, form }) => {
    const { getFieldDecorator } = form;
    const { params } = match;
    const { id: campaignId } = params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampaignById(campaignId));
    }, [dispatch, campaignId]);

    const { user } = useSelector(state => state.user);
    const userIsAdmin = user.isAdmin;

    const [disabled, setDisabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const { campaignById, campaignByIdLoading } = useSelector(state => state.campaigns);

    const { title,
        status,
        amount,
        duration,
        locationsSelected,
        createdAt, message, disapprovedAt, commercialUrl, approvedAt } = campaignById;
    const createdDate = moment(createdAt).format('LLLL');
    let expiredDate;
    let approvedDate;
    let disapprovedDate;
    if (status === LIVE) {
        approvedDate = moment(approvedAt).format('LLLL');
        expiredDate = moment(approvedAt).add(duration, 'days').format('LLLL');
    }
    if (status === DISAPPROVE) {
        disapprovedDate = moment(disapprovedAt).format('LLLL');
    }
    const approvedHidden = () => {
        let cond;
        if (status === LIVE) {
            cond = false;
        } else {
            cond = true;
        }
        return cond;
    };
    const disapprovedHidden = () => {
        let cond;
        if (status === DISAPPROVE) {
            cond = false;
        } else {
            cond = true;
        }
        return cond;
    };
    const hidden = () => {
        let cond;
        if (userIsAdmin && status === PEND) {
            cond = false;
        } else {
            cond = true;
        }
        return cond;
    };
    const downloadHidden = () => {
        let cond;
        if (userIsAdmin) {
            cond = false;
        } else {
            cond = true;
        }
        return cond;
    };
    const approve = () => {
        setDisabled(true);
        dispatch(approveCampaign(campaignId));
    };
    const disapprove = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setDisabled(true);
        form.validateFields((error, value) => {
            if (error) {
                return error;
            }
            dispatch(disapproveCampaign({ campaignId, messages: value.messages }));
            form.resetFields();
        });
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleDownload = (url, name) => {
        download(url, `${name}.mp4`);
    };

    const renderoptionTag = () => OPTIONKEY.map(option => (
        <Option key={option} color="blue">{option}</Option>
    ));

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <div>
                <Modal
                    title={TITLE}
                    visible={visible}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            {CANCEL}
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            confirmLoading={confirmLoading}
                            onClick={handleOk}
                        >
                            {SUBMIT}
                        </Button>,
                    ]}
                >
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <Form layout={VERTICAL}>
                                <Item>
                                    {getFieldDecorator('messages', {
                                        rules: [{
                                            message: 'message',
                                            required: true,
                                        }],
                                    })(
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder={PLACEHOLDER}
                                        >
                                            {renderoptionTag()}
                                        </Select>
                                    )}
                                </Item>
                            </Form>
                        </Col>
                    </Row>
                </Modal>
            </div>
            <div className="card_background">
                <Row className="d-sm-flex justify-content-sm-center">
                    <Col sm={20} md={16} lg={14}>
                        <Card
                            loading={campaignByIdLoading}
                            hoverable
                            className="w-100"
                            cover={(
                                <video controls>
                                    <source
                                        src={campaignByIdLoading
                                            ? ''
                                            : commercialUrl}
                                        type="video/mp4"
                                    />
                                </video>
                        )}
                            actions={[
                                <Button key="back" type="primary" color="red" ghost onClick={() => history.goBack()}>
                                    {BACK}
                                </Button>,
                                <Button
                                    key="disapprove"
                                    disabled={disabled}
                                    onClick={() => disapprove()}
                                    type="danger"
                                    ghost
                                    hidden={hidden()}
                                >
                                    {DISAPPROVECAMPAIGN}
                                </Button>,
                                <Button
                                    key="approve"
                                    disabled={disabled}
                                    onClick={() => approve()}
                                    type="primary"
                                    hidden={hidden()}
                                >
                                    {APPROVECAMPAIGN}
                                </Button>,
                            ]}
                        >
                            <div
                                className="d-flex justify-content-between"
                                style={{ marginBottom: '10px' }}
                            >
                                <div>
                                    <Typography.Text strong="true">
                                        {title}
                                    </Typography.Text>
                                </div>
                                <div hidden={downloadHidden()}>
                                    <Button
                                        type="primary"
                                        icon="download"
                                        onClick={() => handleDownload(commercialUrl, title)}
                                    >
                                        {DOWNLOAD}
                                    </Button>
                                </div>
                                <div>
                                    <Tag color={statusColor(status)}>{campaignByIdLoading ? '' : status.toUpperCase()}</Tag>
                                    {`₦ ${amount}`}
                                </div>
                            </div>
                            <div>
                                <Row>
                                    <Col span={5}>{LOCATIONS}</Col>
                                    <Col span={18} offset={1}>
                                        {campaignByIdLoading
                                            ? []
                                            : locationsSelected.sort().map(
                                                location => (
                                                    <Tag key={location} color="blue">
                                                        {location}
                                                    </Tag>
                                                )
                                            )}
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={5}>{CREATEDAT}</Col>
                                    <Col span={18} offset={1}>{createdDate}</Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={5}>{DURATION}</Col>
                                    <Col span={18} offset={1}>{`${duration} days`}</Col>
                                </Row>
                            </div>
                            <div hidden={disapprovedHidden()}>
                                <Row>
                                    <Col span={5}>{DISAPPROVED}</Col>
                                    <Col span={18} offset={1}>{disapprovedDate}</Col>
                                </Row>
                            </div>
                            <div hidden={disapprovedHidden()}>
                                <Row>
                                    <Col span={5}>{MESSAGE}</Col>
                                    <Col span={18} offset={1}>
                                        {status !== DISAPPROVE
                                            ? []
                                            : campaignByIdLoading ? []
                                                : message.map(
                                                    messa => (
                                                        <Tag key={messa} color="blue">
                                                            {messa}
                                                        </Tag>
                                                    )
                                                )}
                                    </Col>
                                </Row>
                            </div>
                            <div hidden={approvedHidden()}>
                                <Row>
                                    <Col span={5}>{APPROVED}</Col>
                                    <Col span={18} offset={1}>{approvedDate}</Col>
                                </Row>
                            </div>
                            <div hidden={approvedHidden()}>
                                <Row>
                                    <Col span={5}>{EXPIRES}</Col>
                                    <Col span={18} offset={1}>{expiredDate}</Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

const ViewCampaign = Form.create()(ViewCampaignWithModal);

export default ViewCampaign;

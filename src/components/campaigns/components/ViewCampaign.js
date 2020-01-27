import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import {
    Card, Row, Col, Form, Button, Typography, Tag, Modal, Select, Tooltip, Icon
} from 'antd';
import moment from 'moment';
import download from 'downloadjs';

import { getCampaignById, approveCampaign, disapproveCampaign } from '../actions';
import { statusColor } from '../../utils/functions';
import {
    LOCATIONS,
    APPROVECAMPAIGN,
    TITLE,
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
    DISAPPROVED,
    NAIRASIGN
} from '../constants';

const { Option } = Select;
const { Item } = Form;
const { Paragraph, Text } = Typography;

const ViewCampaignWithModal = ({ match, form }) => {
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

    const locationsTag = locations => {
        const selectedLocations = locations.sort();
        if (selectedLocations.length > 3) {
            const locationsShort = selectedLocations.slice(0, 3);
            return (
                <div>
                    {locationsShort.map(location => (
                        <Tag
                            key={location}
                            color="blue"
                            style={{ marginBottom: '5px' }}
                        >
                            {location}
                        </Tag>
                    ))}
                    <Tooltip title="More Locations">
                        <Tag
                            color="pink"
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => console.log('yes')}
                        >
                            <Icon type="ellipsis" />
                        </Tag>
                    </Tooltip>
                </div>
            );
        }
    };

    return (
        <>
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
            <Row type="flex" justify="center">
                <Col sm={24} md={18} lg={12}>
                    <Card
                        loading={campaignByIdLoading}
                        title={(
                            <>
                                <Typography.Text type="secondary" strong>
                                    {title ? title.toUpperCase() : ''}
                                </Typography.Text>
                                <Tag
                                    color={statusColor(status)}
                                    className="ml-3"
                                >
                                    {campaignByIdLoading ? '' : status.toUpperCase()}
                                </Tag>
                            </>

                        )}
                        extra={(
                            <Typography.Text
                                className="total_text"
                                style={{
                                    fontSize: '24px', fontWeight: 'bolder',
                                }}
                                strong
                            >
                                <span className="mr-1">
                                    {ReactHtmlParser(NAIRASIGN)}
                                </span>
                                {amount}
                            </Typography.Text>
                        )}
                        className="w-100"
                        cover={(
                            <video
                                controls
                                style={{
                                    height: '30vh',
                                }}
                            >
                                <source
                                    src={campaignByIdLoading
                                        ? ''
                                        : commercialUrl}
                                    type="video/mp4"
                                />
                            </video>
                        )}
                        actions={[
                            <Tooltip key="approve" title={DISAPPROVECAMPAIGN}>
                                <Button
                                    key="disapprove"
                                    disabled={disabled}
                                    onClick={() => disapprove()}
                                    type="danger"
                                    ghost
                                    shape="circle-outline"
                                    icon="dislike"
                                    hidden={hidden()}
                                />
                            </Tooltip>,
                            <Tooltip key="download" title={DOWNLOAD}>
                                <Button
                                    type="primary"
                                    shape="circle"
                                    ghost
                                    icon="download"
                                    onClick={() => handleDownload(commercialUrl, title)}
                                    hidden={downloadHidden()}
                                />
                            </Tooltip>,
                            <Tooltip key="approve" title={APPROVECAMPAIGN}>
                                <Button
                                    disabled={disabled}
                                    onClick={() => approve()}
                                    icon="like"
                                    shape="circle-outline"
                                    ghost
                                    style={{
                                        border: '1px solid green',
                                        color: 'green',
                                    }}
                                    hidden={hidden()}
                                />
                            </Tooltip>,
                        ]}
                    >
                        <Row>
                            <Col span={5}>{LOCATIONS}</Col>
                            <Col span={18} offset={1}>
                                {campaignByIdLoading
                                    ? []
                                    : locationsTag(locationsSelected)}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5}>{CREATEDAT}</Col>
                            <Col span={18} offset={1}>{createdDate}</Col>
                        </Row>
                        <Row>
                            <Col span={5}>{DURATION}</Col>
                            <Col span={18} offset={1}>{`${duration} days`}</Col>
                        </Row>
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
                                                    <Paragraph
                                                        key={messa}
                                                        ellipsis={{
                                                            rows: 1,
                                                            expandable: true,
                                                        }}
                                                    >
                                                        {messa}
                                                    </Paragraph>
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
        </>
    );
};

const ViewCampaign = Form.create('campaignFormModal')(ViewCampaignWithModal);

export default ViewCampaign;

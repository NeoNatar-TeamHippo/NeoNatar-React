import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import {
    Card, Row, Col, Form, Button, Typography, Tag, Tooltip, Icon
} from 'antd';
import moment from 'moment';
import download from 'downloadjs';

import { getCampaignById, approveCampaign, disapproveCampaign } from '../actions';
import { statusColor } from '../../utils/functions';
import LocationModal from './LocationModal';
import DisapprovalModal from './DisapprovalModal';
import {
    LOCATIONS,
    APPROVECAMPAIGN,
    DOWNLOAD,
    EXPIRES,
    APPROVED,
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

const { Paragraph } = Typography;

const ViewCampaignWithModal = ({ match, form }) => {
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
    const [locationVisible, setLocationVisible] = useState(false);
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

    const locationHandleOk = () => {
        setLocationVisible(false);
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
                        <Button
                            color="pink"
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => setLocationVisible(true)}
                        >
                            <Icon type="ellipsis" />
                        </Button>
                    </Tooltip>
                </div>
            );
        }
        return (
            <div>
                {selectedLocations.map(location => (
                    <Tag
                        key={location}
                        color="blue"
                        style={{ marginBottom: '5px' }}
                    >
                        {location}
                    </Tag>
                ))}
            </div>
        );
    };

    return (
        <>
            <LocationModal
                locationVisible={locationVisible}
                locationHandleOk={locationHandleOk}
                campaignByIdLoading={campaignByIdLoading}
                locationsSelected={locationsSelected}
            />
            <DisapprovalModal
                visible={visible}
                handleCancel={handleCancel}
                confirmLoading={confirmLoading}
                handleOk={handleOk}
            />
            <div className="card_background">
                <Row type="flex" justify="center">
                    <Col sm={24} md={18} lg={12}>
                        <Card
                            loading={campaignByIdLoading}
                            hoverable
                            title={(
                                <>
                                    <Tag
                                        color={statusColor(status)}
                                        className="ml-3"
                                    >
                                        {campaignByIdLoading ? '' : status.toUpperCase()}
                                    </Tag>
                                    <Typography.Text type="secondary" strong>
                                        {title ? title.toUpperCase() : ''}
                                    </Typography.Text>
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
            </div>
        </>
    );
};

const ViewCampaign = Form.create()(ViewCampaignWithModal);

export default ViewCampaign;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Icon, Card, Row, Col, Button, Typography, Tag
} from 'antd';
import moment from 'moment';

import { getCampaignById, approveCampaign } from '../actions';
import { statusColor } from '../../utils/functions';
import { LOCATIONS, APPROVECAMPAIGN, EXPIRES, APPROVED, PEND, CREATEDAT } from '../constants';

const ViewCampaign = ({ match, history }) => {
    const { params } = match;
    const { id: campaignId } = params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCampaignById(campaignId));
    }, [dispatch, campaignId]);

    const { user } = useSelector(state => state.user);
    const userIsAdmin = user.isAdmin;

    const { campaignById, campaignByIdLoading } = useSelector(state => state.campaigns);

    const { title,
        status,
        amount,
        duration,
        locationsSelected,
        createdAt, commercialUrl, approvedAt } = campaignById;
    const createdDate = moment(createdAt).format('LLLL');
    let expiredDate;
    let approvedDate;
    if (status !== PEND) {
        approvedDate = moment(approvedAt).format('LLLL');
        expiredDate = moment(approvedAt).add(duration, 'days').format('LLLL');
    }
    const hidden = () => {
        let cond;
        if (userIsAdmin && status === PEND) {
            cond = false;
        } else {
            cond = true;
        }
        return cond;
    };
    const approve = () => {
        dispatch(approveCampaign(campaignId));
    };

    return (
        <div className="card_background">
            <Row className="d-sm-flex justify-content-sm-center">
                <Col sm={20} md={16} lg={12}>
                    <Card
                        loading={campaignByIdLoading}
                        hoverable
                        className="w-100"
                        cover={(
                            <video controls>
                                <source src={commercialUrl} type="video/mp4" />
                            </video>
                        )}
                        actions={[
                            <Button key="arrow-left" type="link" onClick={() => history.goBack()}>
                                <Icon type="arrow-left" />
                            </Button>,
                        ]}
                    >
                        <div className="d-flex justify-content-between">
                            <div>
                                <Typography.Title level={3}>
                                    {title}
                                </Typography.Title>
                            </div>
                            <div>
                                <Tag color={statusColor(status)}>{campaignByIdLoading ? '' : status.toUpperCase()}</Tag>
                                {`₦ ${amount}`}
                            </div>
                        </div>
                        <div>
                            <Row>
                                <Col span={5}>{LOCATIONS}</Col>
                                <Col span={17} offset={2}>
                                    {campaignByIdLoading
                                        ? []
                                        : locationsSelected.map(location => <Tag key={location}>{location}</Tag>)}
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col span={5}>{CREATEDAT}</Col>
                                <Col span={17} offset={2}>{createdDate}</Col>
                            </Row>
                        </div>
                        <div hidden={status === PEND}>
                            <Row>
                                <Col span={5}>{APPROVED}</Col>
                                <Col span={17} offset={2}>{approvedDate}</Col>
                            </Row>
                        </div>
                        <div hidden={status === PEND}>
                            <Row>
                                <Col span={5}>{EXPIRES}</Col>
                                <Col span={17} offset={2}>{expiredDate}</Col>
                            </Row>
                        </div>
                        <div>
                            <Button
                                onClick={() => approve()}
                                hidden={hidden()}
                            >
                                {APPROVECAMPAIGN}
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ViewCampaign;

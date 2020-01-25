import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Select, Tabs, Button, Typography, Input, message, Tooltip } from 'antd';
import CommercialForm from '../../commercials/components/CommercialForm';
import { setVideoDetails, next, setCommercialId, setDuration, resetFormState } from '../actions';
import { getCommercial } from '../../commercials/actions';
import { PROCEED, VIEW, CHOOSE_A_TITLE, CHOOSE_PREVIOUS_VIDEO } from '../constants';
import VIDEO_SVG from '../../../images/svgs/undraw_video_streaming_yyld.svg';

const { TabPane } = Tabs;
const { Option } = Select;
const UploadVideo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCommercial());
        dispatch(resetFormState());
    }, [dispatch]);
    const { commercials } = useSelector(state => state.commercials);
    const [displayVideo, setdisplayVideo] = useState(null);
    const [inputCampaignTitle, setinputCampaignTitle] = useState(null);
    const onChange = value => {
        const url = value.split(',')[0];
        const commercialId = value.split(',')[1];
        const duration = value.split(',')[2];
        dispatch(setDuration(duration));
        dispatch(setCommercialId(commercialId));
        setdisplayVideo(url);
    };

    const onBlur = () => {
        console.log('blur');
    };

    const onFocus = () => {
        console.log('focus');
    };

    const onSearch = val => {
        console.log('search:', val);
    };
    const callback = key => {
        console.log(key);
    };
    const getCampaignTitle = e => {
        setinputCampaignTitle(e.target.value);
    };
    const renderOptionValue = obj => `${obj.url},${obj.id},${obj.duration}`;
    const renderCommercials = () => commercials.map(commercial => (
        <Option
            key={commercial.videoId}
            value={renderOptionValue(commercial)}
        >
            {commercial.title}
        </Option>
    ));
    const handleProceed = () => {
        if (!inputCampaignTitle) {
            message.error('Please input a campaign title before proceeding', 4);
        }
        dispatch(next());
        const payload = {
            title: inputCampaignTitle,
            url: displayVideo,
        };
        dispatch(setVideoDetails(payload));
    };
    const renderDisplayVideo = () => (
        <div className="d-flex justify-content-between mt-4">
            <Button type="ghost" onClick={() => console.log(displayVideo)}>
                {VIEW}
            </Button>
            <Tooltip title={!inputCampaignTitle ? 'Please input a title before proceeding' : ''}>
                <Button
                    type="primary"
                    disabled={!inputCampaignTitle}
                    onClick={() => handleProceed()}
                >
                    {PROCEED}
                </Button>
            </Tooltip>
        </div>
    );
    return (
        <div className="my-4 container">
            <Row type="flex" justify="space-between" gutter={[{ lg: 32, md: 24, sm: 16, xs: 8 }, 20]}>
                <Col xs={24} lg={12}>
                    <Row type="flex" justify="center">
                        <Col span={18}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="New Video" key="1">
                                    <CommercialForm />
                                </TabPane>
                                {commercials.length > 0 && (
                                    <TabPane tab="Saved Videos" key="2">
                                        <Row gutter={16} type="flex" justify="start" align="middle">
                                            <Col span={24}>
                                                <Typography.Text strong className="mt-2">
                                                    {CHOOSE_A_TITLE}
                                                </Typography.Text>
                                                <Input
                                                    required
                                                    className="mt-2"
                                                    placeholder="Campaign Title"
                                                    onChange={getCampaignTitle}
                                                />
                                                <div className="mt-4">
                                                    <Typography.Text strong>
                                                        {CHOOSE_PREVIOUS_VIDEO}
                                                    </Typography.Text>
                                                    <Select
                                                        showSearch
                                                        className="w-100 mt-2"
                                                        placeholder="Select a video"
                                                        optionFilterProp="children"
                                                        onChange={onChange}
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) => option
                                                            .props.children
                                                            .toLowerCase()
                                                            .indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {renderCommercials()}
                                                    </Select>
                                                </div>
                                            </Col>
                                            <Col span={24}>
                                                {displayVideo ? (
                                                    renderDisplayVideo()
                                                ) : ''}
                                            </Col>
                                        </Row>
                                    </TabPane>
                                )}
                            </Tabs>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={12} className="d-none d-lg-block">
                    <div className="image_div">
                        <img src={VIDEO_SVG} alt="" width="100%" height="80%" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default UploadVideo;

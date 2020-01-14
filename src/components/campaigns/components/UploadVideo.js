import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Select, Tabs, Button, Typography, Input } from 'antd';
import CommercialForm from '../../commercials/components/CommercialForm';
import { setVideoDetails, next, setCommercialId, setDuration } from '../actions';
import { PROCEED, VIEW, CHOOSE_A_TITLE, CHOOSE_PREVIOUS_VIDEO } from '../constants';

const { TabPane } = Tabs;
const { Option } = Select;
const UploadVideo = () => {
    const dispatch = useDispatch();
    const { commercials } = useSelector(state => state.commercials);
    const [displayVideo, setdisplayVideo] = useState(null);
    const [inputCampaignTitle, setinputCampaignTitle] = useState(null);
    const onChange = value => {
        const url = value.split(',')[0];
        const commercialId = value.split(',')[1];
        const duration = value.split(',')[2];
        setDuration(duration)
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
    const renderCommercials = () => commercials.map(commercial => (
        <Option
            key={commercial.videoId}
            value={`${commercial.url},${commercial.commercialId},${commercial.duration}`}
        >
            {commercial.title}
        </Option>
    ));
    const handleProceed = () => {
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
            <Button type="primary" onClick={() => handleProceed()}>
                {PROCEED}
            </Button>
        </div>
    );
    return (
        <div className="my-4">
            <Row type="flex" justify="center" align="middle">
                <Col xs={18} md={12} lg={8}>
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
        </div>
    );
};
export default UploadVideo;
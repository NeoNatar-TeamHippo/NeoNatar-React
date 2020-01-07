import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommercialForm from '../../commercials/components/CommercialForm'
import { Row, Col, Select, Tabs, Button, Typography, Input } from 'antd';
import { setVideoDetails, next } from '../actions'
const { TabPane } = Tabs;
const { Option } = Select;
const UploadVideo = () => {
    const dispatch = useDispatch();
    const { commercials, loadingCommercials } = useSelector(state => state.commercials);
    const [displayVideo, setdisplayVideo] = useState(null);
    const [inputCampaignTitle, setinputCampaignTitle] = useState(null)
    const onChange = (value) => {
        setdisplayVideo(value);
    }

    const onBlur = () => {
        console.log('blur');
    }

    const onFocus = () => {
        console.log('focus');
    }

    const onSearch = (val) => {
        console.log('search:', val);
    }
    const callback = (key) => {
        console.log(key);
    }
    const getCampaignTitle = (e) => {
        setinputCampaignTitle(e.target.value)
    }
    const renderCommercials = () => {
        return commercials.map((commercial) => {
            return (<Option key={commercial.videoId} value={commercial.url}>{commercial.title}</Option>)
        })
    }
    const handleProceed = () => {
        dispatch(next());
        const payload = {
            url: displayVideo,
            title: inputCampaignTitle,
        }
        dispatch(setVideoDetails(payload));
    }
    const renderDisplayVideo = () => {
        return (
            <div className="d-flex justify-content-between mt-4">
                <Button type='ghost' onClick={() => console.log(displayVideo)}>
                    View
                </Button>
                <Button type='primary' onClick={() => handleProceed()}>
                    Proceed
                </Button>
            </div>
        )
    }
    return (
        <div className="my-4">
            <Row type="flex" justify="center" align="middle">
                <Col xs={18} md={12} lg={8}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="New Video" key="1">
                            <CommercialForm></CommercialForm>
                        </TabPane>
                        {commercials.length > 0 && (
                            <TabPane tab="Saved Videos" key="2">
                                <Row gutter={16} type='flex' justify='start' align='middle'>
                                    <Col span={24}>
                                        <Typography.Text strong className='mt-2'>
                                            Choose a suitable campaign title:
                            </Typography.Text>
                                        <Input required className='mt-2' placeholder='Campaign Title' onChange={getCampaignTitle}>
                                        </Input>
                                        <div className='mt-4'>
                                            <Typography.Text strong >
                                                Choose from previous videos:
                            </Typography.Text>
                                            <Select
                                                showSearch
                                                className='w-100 mt-2'
                                                placeholder="Select a video"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onFocus={onFocus}
                                                onBlur={onBlur}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
    )
}
export default UploadVideo;

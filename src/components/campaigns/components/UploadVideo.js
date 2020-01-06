import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommercialForm from '../../commercials/components/CommercialForm'
import { Row, Col, Select, Tabs, Form, Button, Typography } from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;
const UploadVideo = ({ form }) => {
    const { commercials, loadingCommercials } = useSelector(state => state.commercials);
    const [displayVideo, setdisplayVideo] = useState(null);
    const { getFieldDecorator, resetFields, validateFields } = form;
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values);
                // resetFields();
            }
        });
    };
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
    const renderCommercials = () => {
        return commercials.map((commercial, index) => {
            return (<Option key={index} value={commercial.url}>{commercial.title}</Option>)
        })
    }
    const renderDisplayVideo = () => {
        return (
            <div className="d-flex justify-content-between mt-4">
                <Button type='ghost' onClick={() => console.log('open modal now')}>
                    View
                </Button>
                <Button type='primary' onClick={() => console.log('go next now')}>
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
                                        <div className='mt-4'>
                                            <Typography.Text strong >
                                                Choose from previous videos
                            </Typography.Text>
                                            <Select
                                                showSearch
                                                className='w-100 mt-4'
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
const WrappedUploadVideo = Form.create({ name: 'uploadVideoCampaign' })(UploadVideo);
export default WrappedUploadVideo;

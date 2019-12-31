import React, { useEffect } from 'react';
import { Form, Input, Modal, Button, Upload, Icon } from 'antd';
import { useDispatch } from 'react-redux';

import { COMMERCIALS_URL, UPLOAD, FILE_TYPE } from '../constants';
import { requestVideos, requestVideoUpload } from '../actions';

import { openNotification } from '../../utils/functions';

const { Item } = Form;
const { Dragger } = Upload;

const UploadVideoForm = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestVideos());
    }, [dispatch]);

    const { visible, onCancel, form: { getFieldDecorator, resetFields, validateFields } } = props;
    const uploadProps = {
        action: COMMERCIALS_URL,
        multiple: false,
        name: 'file',
        onChange(info) {
            const {
                fileList,
                file: {
                    status,
                },
            } = info;
            if (status !== 'uploading') {
                return fileList;
            }
        },
    };

    const handleVideoUpload = () => {
        validateFields((error, values) => {
            if (error) {
                return error;
            }
            const videoUpload = {
                title: values.title,
                upload: values.upload.fileList,
            };
            dispatch(requestVideoUpload(videoUpload));
            setTimeout(() => {
                resetFields();
                openNotification('Your video was successfully created', 'Create Video');
            }, 3000);
        });
    };

    return (
        <Modal
            visible={visible}
            title="Upload Video"
            okText="Upload"
            onCancel={onCancel}
            onCreate={() => handleVideoUpload()}
        >
            <Form layout="vertical">
                <Item label="title">
                    {getFieldDecorator('title', {
                        rules: [{
                            message: 'Please add a title!',
                            required: true,
                        }],
                    })(<Input />)}
                </Item>
                <Item>
                    {getFieldDecorator('upload', {
                        rules: [{
                            message: 'Please add a video!',
                            required: true,
                        }],
                    })(
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <Button className="ant-upload-text" type="primary">{UPLOAD}</Button>
                            <p className="ant-upload-hint">{FILE_TYPE}</p>
                        </Dragger>
                    )}
                </Item>
            </Form>
        </Modal>
    );
};

const UploadVideo = Form.create()(UploadVideoForm);

export default UploadVideo;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Upload, Button, Icon } from 'antd';
import { normFile, handleFormData, openNotification } from '../../utils/functions';
import { CREATE_COMMERCIAL, UPLOAD } from '../constants';
import { postCommercial } from '../actions';

const CommercialForm = ({ form }) => {
    const dispatch = useDispatch();
    const { getFieldDecorator, resetFields, validateFields } = form;
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                const newFormData = handleFormData(values);
                dispatch(postCommercial(newFormData));
                resetFields();
                setTimeout(() => {
                    openNotification('Uploaded Successfully', 'Upload Video');
                },
                3000);
            }
        });
    };
    const props = {
        listType: 'picture',
        name: 'commercialVideo',
    };
    const dummyRequest = ({ onSuccess }) => {
        onSuccess('ok');
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item label="Title" hasFeedback>
                {getFieldDecorator('title', {
                    rules: [{ message: 'Please input a title', required: true }],
                })(<Input type="text" />)}
            </Form.Item>
            <Form.Item label="Description" hasFeedback>
                {getFieldDecorator('description', {
                    rules: [{ message: 'Please add a description', required: true }],
                })(<Input.TextArea />)}
            </Form.Item>
            <Form.Item label="Upload">
                {getFieldDecorator('video', {
                    getValueFromEvent: normFile,
                    rules: [{ message: 'Please upload a video', required: true }],
                    valuePropName: 'fileList',
                })(
                    <Upload
                        supportServerRender
                        accept="video/mp4"
                        customRequest={dummyRequest}
                        {...props}
                    >
                        <Button block>
                            <Icon type="upload" />
                            {UPLOAD}
                        </Button>
                    </Upload>
                )}
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                >
                    {CREATE_COMMERCIAL}
                </Button>
            </Form.Item>
        </Form>
    );
};

const WrappedCommercialForm = Form.create({ name: 'commercial-form' })(CommercialForm);
export default WrappedCommercialForm;

import React from 'react';
import { Form, Input, Modal, Button, Upload, Icon } from 'antd';

import { COMMERCIALS_URL, UPLOAD, FILE_TYPE } from '../constants';

const { Item } = Form;
const { TextArea } = Input;
const { Dragger } = Upload;

class CommercialsForm extends React.Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        const props = {
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
                    // console.log(info.file, info.fileList);
                }
            },
        };
        return (
            <Modal
                visible={visible}
                title="Upload Commercial"
                okText="Upload"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical" className="new-commercial">
                    <Item label="title">
                        {getFieldDecorator('title', {
                            rules: [{
                                message: 'Please add a title!',
                                required: true,
                            }],
                        })(<Input />)}
                    </Item>
                    <Item label="description">
                        {getFieldDecorator('description', {
                            rules: [{
                                message: 'Please add a description!',
                                required: true,
                            }],
                        })(<TextArea />)}
                    </Item>
                    <Item>
                        {getFieldDecorator('upload', {
                            rules: [{
                                message: 'Please add a video!',
                                required: true,
                            }],
                        })(
                            <Dragger {...props}>
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
    }
}

const CreateCommercials = Form.create()(CommercialsForm);

export default CreateCommercials;

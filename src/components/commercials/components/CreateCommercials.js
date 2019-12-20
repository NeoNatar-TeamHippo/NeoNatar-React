import React from 'react';
import { Form, Input, Modal, Button, Upload, Icon } from 'antd';

import { FORM_ITEM_LAYOUT, UPLOAD, FILE_TYPE } from '../constants';

const { Item } = Form;
const { Dragger } = Upload;

class CommercialsForm extends React.Component {
    render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Upload Commercial"
                okText="Upload"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form {...FORM_ITEM_LAYOUT} layout="vertical">
                    <Item>
                        {getFieldDecorator('title', {
                            rules: [{
                                message: 'Please input the title of collection!',
                                required: true,
                            }],
                        })(<Input placeholder="title" />)}
                    </Item>
                    <Item>
                        {getFieldDecorator('description', {
                            rules: [{
                                message: 'Please input the title of collection!',
                                required: true,
                            }],
                        })(<Input placeholder="description" />)}
                    </Item>
                    {/* <Item>
                        {getFieldDecorator('upload', {
                            rules: [{
                                message: 'Please input the title of collection!',
                                required: true,
                            }],
                        })(
                            <Dragger>
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <Button className="ant-upload-text" type="primary">{UPLOAD}</Button>
                                <p className="ant-upload-hint">{FILE_TYPE}</p>
                            </Dragger>
                        )}

                    </Item> */}
                </Form>
            </Modal>
        );
    }
}

const CreateCommercials = Form.create()(CommercialsForm);

export default CreateCommercials;

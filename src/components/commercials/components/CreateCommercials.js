import React from 'react';
import { Form, Input, Modal, Button, Upload, Icon } from 'antd';

import { FORM_ITEM_LAYOUT } from '../constants';

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
                    <Item label="Title">
                        {getFieldDecorator('title', {
                            rules: [{
                                message: 'Please input the title of collection!',
                                required: true,
                            }],
                        })(<Input />)}
                    </Item>
                    <Item label="Description">
                        {getFieldDecorator('title', {
                            rules: [{
                                message: 'Please input the title of collection!',
                                required: true,
                            }],
                        })(<Input />)}
                    </Item>
                    <Item>
                        <Dragger>
                            <p className="ant-upload-drag-icon">
                                <Icon type="inbox" />
                            </p>
                            <Button className="ant-upload-text" type="primary">Upload</Button>
                            <p className="ant-upload-hint">File types accepted include: .mp4</p>
                        </Dragger>
                    </Item>
                </Form>
            </Modal>
        );
    }
}

const CreateCommercials = Form.create()(CommercialsForm);

export default CreateCommercials;

import React from 'react';
import {
    Row, Col, Form, Button, Modal, Select
} from 'antd';
import {
    TITLE,
    CANCEL,
    SUBMIT,
    PLACEHOLDER,
    OPTIONKEY,
    VERTICAL
} from '../constants';

const { Option } = Select;
const { Item } = Form;

const ViewCampaignWithModal = props => {
    const { form, visible, handleCancel, handleOk, confirmLoading } = props;
    const { getFieldDecorator } = form;

    const renderoptionTag = () => OPTIONKEY.map(option => (
        <Option key={option} color="blue">{option}</Option>
    ));

    return (
        <Modal
            title={TITLE}
            visible={visible}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    {CANCEL}
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    confirmLoading={confirmLoading}
                    onClick={handleOk}
                >
                    {SUBMIT}
                </Button>,
            ]}
        >
            <Row type="flex" justify="center">
                <Col span={24}>
                    <Form layout={VERTICAL}>
                        <Item>
                            {getFieldDecorator('messages', {
                                rules: [{
                                    message: 'input message for disapproving',
                                    required: true,
                                }],
                            })(
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder={PLACEHOLDER}
                                >
                                    {renderoptionTag()}
                                </Select>
                            )}
                        </Item>
                    </Form>
                </Col>
            </Row>
        </Modal>
    );
};

const ViewCampaign = Form.create()(ViewCampaignWithModal);

export default ViewCampaign;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Modal, Row, Col, Select } from 'antd';

import {
    CREATE,
    CREATETICKET,
    HIGHOPTION,
    LOWOPTION,
    MEDIUMOPTION,
    PRIORITY,
    PRIORITYMESSAGE,
    TITLEMESSAGE,
    VERTICAL,
    TITLE
} from '../constants';
import { postTicket } from '../actions';

const { Item } = Form;
const { Option } = Select;
const option = [HIGHOPTION, MEDIUMOPTION, LOWOPTION];

const TicketForm = props => {
    const { onCancel, form } = props;
    let { visible } = props;
    const { getFieldDecorator } = form;
    const dispatch = useDispatch();

    const handleCreate = () => {
        form.validateFields((error, value) => {
            if (error) {
                return error;
            }
            dispatch(postTicket(value));
            form.resetFields();
        });
        visible = false;
    };
    return (
        <Modal
            visible={visible}
            title={CREATETICKET}
            okText={CREATE}
            onCancel={onCancel}
            onOk={handleCreate}
        >
            <Row type="flex" justify="center">
                <Col span={15}>
                    <Form layout={VERTICAL}>
                        <Item>
                            {getFieldDecorator(TITLE, {
                                rules: [{
                                    message: TITLEMESSAGE,
                                    required: true,
                                }],
                            })(<Input placeholder={TITLE} />)}
                        </Item>
                        <Item>
                            {getFieldDecorator(PRIORITY, {
                                rules: [{
                                    message: PRIORITYMESSAGE,
                                    required: true,
                                }],
                            })(
                                <Select>
                                    {
                                        option.map(key => (
                                            <Option key={key}>
                                                {key.toUpperCase()}
                                            </Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Item>
                    </Form>
                </Col>
            </Row>
        </Modal>
    );
};

const CreateTicket = Form.create()(TicketForm);

export default CreateTicket;

import React, { useState } from 'react';
import { Form, Input, Icon, Button, Card, Upload, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CREATE_LOCATION, CREATE_NEW_LOCATION, FORM_ITEMS, UPLOAD_TEXT } from '../constants';

const NewLocation = ({ form }) => {
    // const [state, setstate] = useState(initialState);
    // const dispatch = useDispatch();
    const { loading } = useSelector(state => state.signIn);
    const { getFieldDecorator, resetFields, validateFields } = form;
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                const formValues = {
                    email: values.email,
                    password: values.password,
                };
                // dispatch(userSignIn(formValues));
                resetFields();
            }
        });
    };
    // const fileList = [
    //     {
    //         uid: '-1',
    //         name: 'xxx.png',
    //         status: 'done',
    //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //     },
    //     {
    //         uid: '-2',
    //         name: 'yyy.png',
    //         status: 'error',
    //     },
    // ];
    const props = {
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
                console.log(file, fileList);
            }
        },
        // defaultFileList: [...fileList],
    };
    const renderFormItem = () => FORM_ITEMS.map(item => (
        <Form.Item key={item.formControlName} hasFeedback>
            {getFieldDecorator(item.formControlName, {
                rules: [{ message: item.message, required: item.required }],
            })(<Input
                type={item.type}
                placeholder={item.placeholder}
            />)}
        </Form.Item>
    ));
    return (
        <div className="card_background">
            <Row type="flex" justify="center" align="middle">
                <Col xs={20} md={18} lg={10}>
                    <Card
                        className="text-center"
                        title={CREATE_NEW_LOCATION}
                    >
                        <Form onSubmit={handleSubmit}>
                            {renderFormItem()}
                            <Form.Item>
                                <Upload multiple accept="image/*" {...props}>
                                    <Button>
                                        <Icon type="upload" />
                                        {UPLOAD_TEXT}
                                    </Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    block
                                >
                                    {CREATE_LOCATION}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
const WrappedNewLocationForm = Form.create({ name: 'newLocation' })(NewLocation);
export default WrappedNewLocationForm;

import React from 'react';
import { Form, Input, Icon, Button, Card, Upload, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {
    CREATE_LOCATION, CREATE_NEW_LOCATION, FORM_ITEMS,
    UPLOAD_TEXT, FORM_ITEM_LAYOUT, WRAPPER_COL
} from '../constants';
import { newLocations } from '../actions';

const NewLocation = ({ form }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.signIn);
    const { getFieldDecorator, resetFields, validateFields } = form;
    const handleFormData = formValues => {
        const formData = new FormData();
        formData.append('name', formValues.name);
        formData.append('address', formValues.address);
        formData.append('lga', formValues.lga);
        formData.append('state', formValues.state);
        formData.append('country', formValues.country);
        formValues.images.forEach(element => {
            formData.append('images', element.originFileObj);
        });
        formData.append('price', formValues.price);
        formData.append('trafficRate', formValues.trafficRate);
        return formData;
    };
    const handleSubmit = e => {
        e.preventDefault();
        validateFields(async (err, values) => {
            if (!err) {
                const newFormData = handleFormData(values);
                dispatch(newLocations(newFormData));
                resetFields();
            }
        });
    };
    const normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const props = {
        listType: 'picture',
        name: 'locationImage',
    };
    const renderFormItem = () => FORM_ITEMS.map(item => (
        <Form.Item label={item.placeholder} key={item.formControlName} hasFeedback>
            {getFieldDecorator(item.formControlName, {
                rules: [{ message: item.message, required: item.required }],
            })(item.type === 'textarea' ? (
                <Input.TextArea />)
                : (<Input type={item.type} />))}
        </Form.Item>
    ));
    const dummyRequest = ({ onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 100);
    };
    return (
        <div className="card_background">
            <Row type="flex" justify="center" align="middle">
                <Col xs={20} md={18} lg={10}>
                    <Card
                        title={CREATE_NEW_LOCATION}
                    >
                        <Form {...FORM_ITEM_LAYOUT} onSubmit={handleSubmit}>
                            {renderFormItem()}
                            <Form.Item label="Upload">
                                {getFieldDecorator('images', {
                                    getValueFromEvent: normFile,
                                    rules: [{
                                        message: 'Atleast one image should be uploaded',
                                        required: true,
                                    }],
                                    valuePropName: 'fileList',
                                })(
                                    <Upload
                                        supportServerRender
                                        multiple
                                        accept="image/*"
                                        customRequest={dummyRequest}
                                        {...props}
                                    >
                                        <Button>
                                            <Icon type="upload" />
                                            {UPLOAD_TEXT}
                                        </Button>
                                    </Upload>
                                )}
                            </Form.Item>
                            <Form.Item wrapperCol={{ ...WRAPPER_COL }}>
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

import React, { useState } from 'react';
import { Button, Form, Icon, Input } from 'antd';
import { SIGN_UP } from '../constants';

const SignUpForm = ({ form }) => {
    const [confirmDirty, setconfirmDirty] = useState(false);
    const [loading, setLoading] = useState(false);
    const { getFieldDecorator } = form;
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        form.validateFields((err, values) => {
            if (!err) {
                const formValues = {
                    confirmPassword: values.confirmPassword,
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    password: values.password,
                };
                console.log(formValues);
                // dispatch(addUser(formValues));
                form.resetFields();
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            }
        });
    };

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setconfirmDirty(confirmDirty || !!value);
    };

    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== form.getFieldValue('password')) {
            callback('Passwords do not match');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        if (value && confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item>
                {getFieldDecorator('firstName', {
                    rules: [{ message: 'Please input your first name!', required: true }],
                })(<Input
                    prefix={<Icon type="user" />}
                    placeholder="First name"
                />)}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('lastName', {
                    rules: [{ message: 'Please input your last name!', required: true }],
                })(<Input
                    prefix={<Icon type="user" />}
                    placeholder="Last name"
                />)}
            </Form.Item>
            <Form.Item hasFeedback>
                {getFieldDecorator('email', {
                    rules: [
                        { message: 'The input is not valid E-mail!', type: 'email' },
                        { message: 'Please input your E-mail!', required: true },
                    ],
                })(<Input
                    prefix={<Icon type="mail" />}
                    type="email"
                    placeholder="Email"
                />)}
            </Form.Item>
            <Form.Item hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        { message: 'Please input your password!', required: true },
                        { validator: validateToNextPassword },
                    ],
                })(<Input.Password placeholder="Input password" />)}
            </Form.Item>
            <Form.Item hasFeedback>
                {getFieldDecorator('confirmPassword', {
                    rules: [
                        { message: 'Please confirm your password!', required: true },
                        { validator: compareToFirstPassword },
                    ],
                })(<Input.Password placeholder="Confirm password" onBlur={handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                    block
                >
                    {SIGN_UP}
                </Button>
            </Form.Item>
        </Form>
    );
};

const WrappedNormalSignUpForm = Form.create({ name: 'signup' })(SignUpForm);
export default WrappedNormalSignUpForm;

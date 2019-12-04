import React, { useState, useEffect } from 'react';
import { Button, Form, Icon, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SIGN_IN } from '../constants';
// import { addUser } from '../actions';

const SignInForm = ({ form }) => {
    // const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { getFieldDecorator } = form;
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        form.validateFields((err, values) => {
            if (!err) {
                const formValues = {
                    email: values.email,
                    password: values.password,
                };
                console.log(formValues);
                // dispatch(addUser(formValues));
                form.resetFields();
            }
        });
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
    return (
        <Form onSubmit={handleSubmit}>
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
                    rules: [{ message: 'Please input your password!', required: true }],
                })(<Input.Password placeholder="Input password" />)}
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                >
                    {SIGN_IN}
                </Button>
            </Form.Item>
        </Form>
    );
};

const WrappedNormalSignInForm = Form.create({ name: 'signin' })(SignInForm);
export default WrappedNormalSignInForm;

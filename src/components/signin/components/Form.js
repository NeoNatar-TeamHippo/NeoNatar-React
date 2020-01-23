import React from 'react';
import { Button, Form, Icon, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_IN } from '../constants';
import { userSignIn, clearErrors } from '../actions';

const SignInForm = ({ form }) => {
    const dispatch = useDispatch();
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
                dispatch(clearErrors())
                dispatch(userSignIn(formValues));
                resetFields();
            }
        });
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
SignInForm.propTypes = {
    form: PropTypes.shape({
        getFieldDecorator: PropTypes.func,
        resetFields: PropTypes.func,
        validateFields: PropTypes.func,
    }).isRequired,
};
const WrappedNormalSignInForm = Form.create({ name: 'signin' })(SignInForm);
export default WrappedNormalSignInForm;

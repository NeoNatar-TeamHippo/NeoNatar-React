import React from 'react';
import { Button } from 'antd';
import { WELCOME_NOTE, BUTTON_TEXT } from '../constants';

const SignUp = () => (
    <div>
        <p>{WELCOME_NOTE}</p>
        <Button type="primary">{BUTTON_TEXT}</Button>
    </div>
);
export default SignUp;

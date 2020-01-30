import React from 'react';
import { Typography } from 'antd';
import { FOOTER_TEXT } from '../constants';

const { Text } = Typography;
const Footer = () => (
    <Typography>
        <Text strong>
            {FOOTER_TEXT}
        </Text>
    </Typography>
);
export default Footer;

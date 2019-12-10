import React, { Fragment } from 'react';
import Logo from '../../../images/neoNatar Logo.svg';

const UnAuthNavbar = () => (
    <Fragment className="unathenticated-header">
        <img src={Logo} width="120px" height="60px" alt="NeoNatar Logo" />
    </Fragment>
);
export default UnAuthNavbar;

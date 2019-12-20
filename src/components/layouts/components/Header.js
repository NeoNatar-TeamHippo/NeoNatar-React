import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../images/neoNatar Logo.svg';

const navHeader = () => (
    <Fragment>
        <NavLink to="/dashboard">
            <img src={Logo} width="120px" height="60px" alt="NeoNatar Logo" />
        </NavLink>
    </Fragment>
);
export default navHeader;

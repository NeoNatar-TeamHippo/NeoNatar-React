import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/neoNatar Logo.svg';

const navHeader = () => (
    <>
        <Link to="/">
            <img src={Logo} width="120px" height="60px" alt="NeoNatar Logo" />
        </Link>
    </>
);
export default navHeader;

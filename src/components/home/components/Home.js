import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../images/neoNatar Logo.svg';

const Home = () => (
    <NavLink to="/dashboard">
        <img className="home-placeholder" src={Logo} alt="logo" />
    </NavLink>
);

export default Home;

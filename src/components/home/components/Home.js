import React from 'react';
import layouts from '../../layouts';
import art from '../../../images/illustration.png';
import text from '../../../images/text.png';

const { HomeLayout } = layouts.components;

const Home = () => (
    <HomeLayout>
        <div className="home-page">
            <div className="image-container">
                <img src={text} alt="dummy-text" />
            </div>
            <div className="image-container hide-image-container">
                <img src={art} alt="illustration" />
            </div>
        </div>
    </HomeLayout>
);

export default Home;

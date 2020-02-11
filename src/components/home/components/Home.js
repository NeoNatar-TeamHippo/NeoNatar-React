import React from 'react';
import HeaderSection from './HeaderSection';
import IconsGrid from './IconsGrid';
import ImageShowcase from './ImageShowcase';
import Testimonials from './Testimonials';
import GettingStarted from './GettingStarted';
import Layouts from '../../layouts';

const { HomeLayout } = Layouts.components;
const Home = () => (
    <HomeLayout>
        <HeaderSection />
        <IconsGrid />
        <ImageShowcase />
        <Testimonials />
        <GettingStarted />
    </HomeLayout>
);
export default Home;

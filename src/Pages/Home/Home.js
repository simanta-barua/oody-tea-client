import React from 'react';
import Reviews from './Reviews/Reviews';
import BannerSlider from './Slider/BannerSlider';
import MainSlider from './Slider/MainSlider';


const Home = () => {
    return (
        <div>
            <BannerSlider />
            <MainSlider></MainSlider>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
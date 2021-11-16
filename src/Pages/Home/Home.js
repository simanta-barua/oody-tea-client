import React from 'react';
import BannerSlider from './Slider/BannerSlider/BannerSlider';
import MainSlider from './Slider/ProductSlider/MainSlider';
import Reviews from './Slider/Reviews/Reviews';



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
import React from 'react';
import BannerSlider from './Slider/BannerSlider/BannerSlider';
import ProductSlider from './Slider/ProductSlider/ProductSlider';
import Reviews from './Slider/Reviews/Reviews';



const Home = () => {
    return (
        <div>
            <BannerSlider />
           <ProductSlider/>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
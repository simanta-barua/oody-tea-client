import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./styles.css";
import SwiperCore, {
    Navigation
} from 'swiper';
SwiperCore.use([Navigation]);
const BannerSlider = () => {

    return (
        <>
            <Swiper navigation={true} className="banner">
                <SwiperSlide className="banner" style={{ 'background-image': 'url(https://i.ibb.co/GFkFX00/slider3.jpg)', 'background-repeat': 'no-repeat' }} >
                    <h1> hello</h1>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
// https://i.ibb.co/GFkFX00/slider3.jpg
export default BannerSlider;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";


const BannerSlider = () => {
    return (
        <div>
            <>
                <Swiper navigation={true} className="bannerSwiper">
                    <SwiperSlide>
                        <h2>Green tea</h2>
                        <img src="https://i.ibb.co/GFkFX00/slider3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/SVR08Qd/slider1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/fSygL6Y/slider4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/JtqrwzT/slider5.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default BannerSlider;
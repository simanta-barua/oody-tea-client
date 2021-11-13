import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
// import Swiper core and required modules
import SwiperCore, {
    Pagination,
} from "swiper/core";
import { Typography } from '@material-ui/core';

// install Swiper modules
SwiperCore.use([Pagination]);
const Reviews = () => {
    return (
        <>
            <Typography variant="h2">Reviews</Typography>
            <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={30} grabCursor={true} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Reviews;
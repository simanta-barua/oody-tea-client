import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import "./styles.css";
import useFetch from "../../../../hooks/useFetch";
// import Swiper core and required modules
import SwiperCore, {
    Pagination,
} from "swiper/core";
import { Typography } from '@material-ui/core';
import SingleProduct from '../../../SingleProduct/SingleProduct';

// install Swiper modules
SwiperCore.use([Pagination]);
const Reviews = () => {

    const url = 'https://stormy-refuge-07494.herokuapp.com/reviews'
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data)
            )
    }, [])


    return (
        <>
            <Typography variant="h2">Reviews</Typography>
            <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={30} grabCursor={true} pagination={{
                "clickable": true
            }} className="mySwiper">
                {
                    reviews.map(product => {
                        return (
                            <SwiperSlide>
                                <h1>Reviews</h1>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};

export default Reviews;
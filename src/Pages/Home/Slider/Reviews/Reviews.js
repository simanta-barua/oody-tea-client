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
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import SingleProduct from '../../../SingleProduct/SingleProduct';
import { Card } from '@mui/material';

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
                    reviews.map(review => {

                        return (
                            <SwiperSlide key={review._id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        // component="img"
                                        // height="240"
                                        // image={image}
                                        // alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                             <span >{review.name}</span>
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {review.review}
                                            </Typography>
                                            <Typography variant="h6" >
                                                <h6>Rating:  {review.rating}</h6>
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
};

export default Reviews;
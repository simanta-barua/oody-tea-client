import React from 'react';
import { Box, Typography } from '@material-ui/core';
import SingleProduct from '../../../SingleProduct/SingleProduct';
import useFetch from "../../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination, EffectCoverflow
} from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const MainSlider = () => {

    const [products] = useFetch();
    let slicedproducts = products.slice(0, 8)
    return (
        <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Typography variant="h4" sx={{ mb: 5 }}>All product</Typography>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                {
                    slicedproducts.map(product => {
                        return (
                            <SwiperSlide>
                                <SingleProduct
                                    key={product?._id}
                                    product={product} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    );
};

export default MainSlider;
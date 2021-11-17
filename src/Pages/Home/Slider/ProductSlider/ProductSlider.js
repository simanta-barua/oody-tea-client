import React from 'react';
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
import { Box } from '@mui/system';

// install Swiper modules
SwiperCore.use([Pagination]);
const ProductSlider = () => {

    const [products] = useFetch();
    let slicedproducts = products.slice(0, 8)

    return (
        <>
            <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                <Typography variant="h2" >Our Future Product</Typography>
            </Box>
            <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={30} grabCursor={true} pagination={{
                "clickable": true
            }} className="mySwiper">
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
        </>
    );
};

export default ProductSlider;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./styles.css";
import SwiperCore, {
    Navigation
} from 'swiper';
import { Box } from '@mui/system';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
SwiperCore.use([Navigation]);
const BannerSlider = () => {

    return (
        <>
            <Swiper navigation={true} className="banner" sx={{ fontWeight: 'bold', letterSpacing: 10 }}>
                <SwiperSlide className="banner" style={{ 'background-image': 'url( https://i.ibb.co/sv2PPBR/Slider1-2000x-1edf1.jpg)' }} >
                    <Box className="bannerBody">
                        <Typography variant='h1'>
                            Good Taste That Lingers     </Typography>
                        <Typography variant='h6'>
                            Celebrate the spirit of Darjeeling in you. It’s not a Tea ,It’s refreshing burst. Exceptional Aroma. Exceptional Tea. Surprised senses every morning.
                        </Typography>
                        <Link to='/product'> <Button variant='contained'>Explore</Button></Link>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className="banner" style={{ 'background-image': 'url( https://i.ibb.co/v1vQvRk/slider-bg2-2000x-15936.jpg)' }} >
                    <Box className="bannerBody">
                        <Typography variant='h1'>
                            Go Natural
                        </Typography>
                        <Typography variant='h6'>
                            Welcome to the grand tea evolution. Give optimum satisfaction to your taste buds & Open up your senses with a cup of tea. Leave you feeling refreshed to feel the wonders of the morning.
                        </Typography>
                        <Link to='/product'> <Button variant='contained'>Explore</Button></Link>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className="banner" style={{ 'background-image': 'url( https://i.ibb.co/1sWKNcZ/slider2.jpg)' }} >
                    <Box className="bannerBody">
                        <Typography variant='h1'>
                            Premium Taste
                        </Typography>
                        <Typography variant='h6'>
                            Mind opening tea not Today, Everyday. Say Good morning to Freshness & discover what is not discovered. Flavors that will lift you off your feet. Start afresh!
                        </Typography>
                        <Link to='/product'> <Button variant='contained'>Explore</Button></Link>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BannerSlider;


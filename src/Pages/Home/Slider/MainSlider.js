import { Box, Container, Grid, Typography } from '@material-ui/core';
import { sliderClasses } from '@mui/material';
import React from 'react';
import useFetch from "../../../hooks/useFetch";
import SingleProduct from '../../SingleProduct/SingleProduct';
const MainSlider = () => {

    const [products] = useFetch();
    let slicedproducts = products.slice(0, 8)
    return (
        <Box sx={{ flexGrow: 1, mt: 5 }}>
            <Typography variant="h4" sx={{ mb: 5 }}>All product</Typography>
            <Container maxWidth >
                <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        slicedproducts.map(product => <SingleProduct
                            key={product?._id}
                            product={product}
                        />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default MainSlider;
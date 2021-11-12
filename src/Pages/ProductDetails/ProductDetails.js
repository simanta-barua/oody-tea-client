import { dividerClasses, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const ProductDetails = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

    }
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/SingleProduct/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data)
            )
    }, []);
    console.log(product);

    return (
        <>
            <Box sx={{ flexGrow: 1, m: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant='h4' sx={{ textAlign: "center", p: "5" }}> Product Details</Typography>
                        <Card >
                           <img src={product?.img} alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h4' sx={{ textAlign: "center", p: "5" }}> Add Product</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="productName">Product Name</label>
                            <input
                                defaultValue={""}
                                placeholder="Product Name"
                                {...register("productName")}
                            />
                            <label htmlFor="description">Description</label>
                            <input
                                defaultValue={""}
                                placeholder="add product description"
                                {...register("description")}
                            />
                            <label htmlFor="date">Date</label>
                            <input
                                defaultValue={""}
                                type="date"
                                placeholder="add product description"
                                {...register("description")}
                            />
                            <label htmlFor="image">Image</label>
                            <input
                                defaultValue={""}
                                placeholder="image url"
                                type="text"
                                {...register("image")}
                            />
                            <label htmlFor="price">price</label>
                            <input
                                defaultValue={""}
                                placeholder="0"
                                type="text"
                                {...register("price", {
                                })}
                            />
                            <input type="submit" value="Add Product" />
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ProductDetails;
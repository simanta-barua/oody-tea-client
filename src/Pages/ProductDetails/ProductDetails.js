import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const email = user?.email;

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { productName, description, weight, image, price, brand } = product

    useEffect(() => {
        const url = `https://stormy-refuge-07494.herokuapp.com/SingleProduct/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data)
            )
    }, []);
    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";
        data.image = image;
        data.price = price;
        data.productName = productName;

        fetch("https://stormy-refuge-07494.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, m: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant='h4' sx={{ textAlign: "center", p: "5" }}> Product Details</Typography>
                        <Card >
                            <img src={image} alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    {productName}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    Details:  {description}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    Price: $ {price}
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    Brand :  {brand}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h4' sx={{ textAlign: "center", p: "5" }}> Add Product</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">Name</label>
                            <input
                                defaultValue={""}
                                type="name"
                                placeholder="Enter Your name"
                                {...register("name")}
                            />
                            <label htmlFor="address">Address</label>
                            <input
                                defaultValue={""}
                                placeholder="Address"
                                type="address"
                                {...register("address")}
                            />
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                placeholder="0"
                                type="number"
                                {...register("quantity", {
                                })}
                            />
                            <input type="submit" value="Place Order" />
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ProductDetails;
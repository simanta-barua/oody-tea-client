import { dividerClasses, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("https://stormy-refuge-07494.herokuapp.com/addProduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);

    };

    return (
        <>
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
        </>
    );
}


export default AddProduct;
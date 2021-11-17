
import { dividerClasses, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
const Reviews = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("https://stormy-refuge-07494.herokuapp.com/postReview", {
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
            <Typography variant='h4' sx={{ textAlign: "center", p: "5" }}> Post Review</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"> Name</label>
                <input
                    defaultValue={""}
                    placeholder="Name"
                    {...register("adminName")}
                />
                <label htmlFor="email">Wite Review</label>
                <input
                    defaultValue={""}
                    placeholder="Review"
                    {...register("review")}
                />
                <label htmlFor="rating">Rating</label>
                <input
                    defaultValue={""}
                    type="number"
                    placeholder="rating"
                    {...register("rating")}
                />

                <input type="submit" value="Post Review" />
            </form>
        </>
    );
}


export default Reviews;
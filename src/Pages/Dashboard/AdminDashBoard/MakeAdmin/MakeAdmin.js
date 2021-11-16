import { dividerClasses, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("https://stormy-refuge-07494.herokuapp.com/makeAdmin", {
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
            <Typography variant='h4' sx={{ textAlign: "center", p: "5" }}> Add Admin</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="adminName">Admin Name</label>
                <input
                    defaultValue={""}
                    placeholder="Admin Name"
                    {...register("adminName")}
                />
                <label htmlFor="email">Admin Email</label>
                <input
                    defaultValue={""}
                    placeholder="Email"
                    {...register("email")}
                />

                <input type="submit" value="Make Admin" />
            </form>
        </>
    );
}


export default MakeAdmin;
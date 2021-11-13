import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Container, TextField, Typography, Alert } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Registration = () => {
  const [userData, setUserData] = useState({});
  const { user, isLoading, registerUser, authError } = useAuth();
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const pwd = watch("password");
  const onSubmit = data => {
    setUserData(data);
    registerUser(data.email, data.password);
    console.log(data);
    
  }
  return (
    <>

      <Box
        component="form"
        sx={{
          mt: 5,
          '& .MuiTextField-root': { py: 2, width: '100%', },
        }}
        autoComplete="off">

        <Typography variant="h2" gutterBottom>Register
        </Typography>

        {!isLoading && <form  >
          <Controller
            name={"email"}
            control={control}
            defaultValue={''}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label={"Email"}
                type="text"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />)} />
          <Controller
            name={"password"}
            control={control}
            rules={{
              required: "Password can't be empty",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label={"Password"}
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message} />
            )} />
          <Controller
            name={"password_match"}
            control={control}
            defaultValue={''}
            rules={{
              required: "Password can't be empty",
              validate: value => value === pwd || "The passwords do not match",

            }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label={"Retype password"}
                type="password"
                error={Boolean(errors.password_match)}
                helperText={errors.password_match?.message} />
            )} />
          <Button sx={{ width: "100%" }} onClick={handleSubmit(onSubmit)} variant="contained">Register</Button>
          <p>or</p>
          <Button sx={{ my: 2, width: "100%" }} variant="contained">  Sign With google</Button>
          <NavLink to="/signin"> <Button >Already have an account? SignIn Here</Button></NavLink>
        </form>}
        {
          isLoading && <CircularProgress />
        }
        {user?.email && <Alert severity="success">success!</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}

      </Box>
    </>
  );
};

export default Registration;
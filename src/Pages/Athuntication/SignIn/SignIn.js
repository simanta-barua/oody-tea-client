import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SingIn.css'


const SignIn = () => {
    const [userData, setUserData] = useState({});
    const { user, signInWithGoogle, signInUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setUserData(data);
        signInUser(data.email, data.password)
        history.push(redirect_url)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
        history.push(redirect_url)
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    mt: 5,
                    '& .MuiTextField-root': { width: '100% ', py: 2 },
                }}
                autoComplete="off">

                <Typography variant="h3" gutterBottom> Sign In
                </Typography>
                {!isLoading && <form >
                    <Controller
                        name={"email"}
                        control={control}
                        rules={{
                            required: 'email is required',
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
                            required: "password can't be empty",
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
                    <Button sx={{ my: 2, width: "100%" }} onClick={handleSubmit(onSubmit)} variant="contained">Login</Button>
                    <Button sx={{ my: 2, width: "100%" }} onClick={handleGoogleSignIn} variant="contained">  Sign With google</Button>
                    <NavLink to="/register"> <Button >Not have an account? Register Here</Button></NavLink>
                </form>}
                {
                    isLoading && <CircularProgress />
                }
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Box>
        </>
    );
};

export default SignIn;
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SignIn = () => {
    const [userData, setUserData] = useState({});
    const { user, signInWithGoogle, signInUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setUserData(data);
        signInUser(user.email, user.password)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { my: 2, width: '70%', },
                }}
                autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item sx={{ m: "auto" }} xs={6} md={8}>
                        <Typography variant="h3" gutterBottom>Login
                        </Typography>
                        {!isLoading && <form  >
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
                            <Button sx={{ width: "70%" }} onClick={handleSubmit(onSubmit)} variant="contained">Login</Button>
                            <p>or</p>
                            <Button sx={{ mb: 2, width: "70%" }} onClick={handleGoogleSignIn} variant="contained">  Sign With google</Button>
                            <NavLink to="/register"> <Button variant="contained">Not have an account? Register Here</Button></NavLink>
                        </form>}
                        {
                            isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <img alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SignIn;
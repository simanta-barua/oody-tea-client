import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin
                    ? (
                        <Redirect
                            to={{
                                pathname: "/dashboardAdmin",
                                state: { from: location }
                            }}
                        />
                    ) :
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div>
            <Box
                sx={{ width: '100%', m: "auto", maxWidth: 500, textAlign: "center" }}>
                <Typography variant="h1" component="div" gutterBottom>
                    404
                </Typography>
                <Typography variant="h4" component="div" gutterBottom>
                    Page Not Found
                </Typography>
                <Link to="/"><Button variant="contained">Go Back Home</Button></Link>
            </Box>
        </div>
    );
};

export default NotFoundPage;
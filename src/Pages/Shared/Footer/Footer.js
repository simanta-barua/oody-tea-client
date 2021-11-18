import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, List, ListItem, Typography } from '@material-ui/core';
import { ListItemText, listItemTextClasses } from '@mui/material';


export default function Footer() {
  return (
    <>

      <Container>
        <Box sx={{ flexGrow: 1 }} textAlign="center">
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={3} >

              <Typography variant='h6'>Call us 800 388 80 90</Typography>
              <Typography variant='h6'>58 Howard Street #2 San Francisco</Typography>
              <Typography variant='h6'>contact@oodytea.com</Typography>

            </Grid>
            <Grid item xs={2} sm={4} md={3} >
              <Typography variant='h6'>Payment Options</Typography>
              <Typography variant='h6'>My Wishlist</Typography>
              <Typography variant='h6'>My Account</Typography>
              <Typography variant='h6'>Product FAQs</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={3} >
              <Typography variant='h6'>Our Company</Typography>
              <Typography variant='h6'>About us</Typography>
              <Typography variant='h6'>Location</Typography>
              <Typography variant='h6'>Register</Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={3} >

            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box textAlign="center"
        sx={{ p: 10 }}>
        <Typography variant="h6" >© 2021 Copyright all Right Reserved Design by Simatna</Typography>
      </Box>
    </>
  );
}

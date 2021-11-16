import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../../hooks/useAuth';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const MyOrder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [myOrders, setMyOrders] = useState();
    console.log(myOrders);

    useEffect(() => {
        fetch(`https://stormy-refuge-07494.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(result => setMyOrders(result))
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure , you want to delete")
        if (proceed) {
            const url = `https://stormy-refuge-07494.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Delete success");
                        const remainingUser = myOrders.filter(user => user._id !== id);
                        setMyOrders(remainingUser);
                    }
                });
        }
    }
    return (
        <Container>
            {
                myOrders?.map(myOrder =>
                    <Paper sx={{ p: 2, margin: 5, maxWidth: 800, flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt="complex" src="/static/images/grid/complex.jpg" />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Standard license
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Full resolution 1920x1080 • JPEG
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                    <Grid item>

                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Typography variant="subtitle1" component="div">
                                        $19.00
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => handleDelete(myOrder?._id)} variant="outlined" sx={{ mt: 6 }} color="error" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Paper>
                )
            }
        </Container>
    );
};

export default MyOrder;
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useFetch from '../../../../hooks/useFetch';
const ManageProduct = () => {
    const [products] = useFetch();
    console.log(products);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure , you want to delete")
        if (proceed) {
            const url = `https://stormy-refuge-07494.herokuapp.com/deleteProduct/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        // alert("Delete success");
                        // const remainingUser = myOrders.filter(user => user._id !== id);
                        // setMyOrders(remainingUser);
                    }
                });
        }
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell style={{ width: '20%' }} align="center" >{product?.name}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell style={{ width: '20%' }} align="right">{product.img}</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" sx={{ m: 2 }} color="success" startIcon={<DeleteIcon />}>
                                        Edit
                                    </Button>
                                    <Button variant="outlined" sx={{ m: 2 }} color="error" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default ManageProduct;
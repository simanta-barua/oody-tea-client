import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import useAuth from '../../../../hooks/useAuth';

const ManageOrder = () => {
    const { user } = useAuth();
    const [Orders, setOrders] = useState();
    const url = `https://stormy-refuge-07494.herokuapp.com/orders?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data)
            )
    }, [])
    console.log(Orders);

    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    console.log(status);

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
                        const remainingOrder = Orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }

    const handleUpdate = (id) => {
        fetch(` https://stormy-refuge-07494.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Update success");
                    const remainingOrder = Orders.filter(order => order._id !== id);
                    setOrders(remainingOrder);
                }
            })
        console.log(id);

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
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Orders?.map((Order) => (
                            <TableRow
                                key={Order?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell style={{ width: '20%' }} align="center" >{Order?.name}</TableCell>
                                <TableCell align="right">{Order?.price}</TableCell>
                                <TableCell style={{ width: '20%' }} align="right">{Order?.img}</TableCell>
                                <TableCell align="center">
                                    <FormControl fullWidth>
                                        <FormControl fullWidth>
                                            <NativeSelect
                                                onChange={handleChange}
                                                defaultValue={Order?.status}
                                                inputProps={{
                                                    name: 'status',
                                                    id: 'uncontrolled-native',

                                                }}

                                            >
                                                <option value={"pending"}>Pending</option>
                                                <option value={"approved"}>Approved</option>
                                            </NativeSelect>
                                        </FormControl>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" sx={{ m: 2 }} onClick={() => handleUpdate(Order?._id)} color="success" startIcon={<DeleteIcon />}>
                                        Update
                                    </Button>
                                    <Button variant="outlined" sx={{ m: 2 }} onClick={() => handleDelete(Order?._id)} color="error" startIcon={<DeleteIcon />}>
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

export default ManageOrder;
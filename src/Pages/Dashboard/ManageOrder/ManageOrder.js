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
import useAuth from '../../../hooks/useAuth';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
const ManageOrder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [myOrders, setMyOrders] = useState();
    console.log(myOrders);


    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(result => setMyOrders(result))
    }, []);
    const [status, setStatus] = useState('');


    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    console.log(status);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure , you want to delete")
        if (proceed) {
            const url = `http://localhost:5000/deleteOrder/${id}`
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

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id})`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });
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
                        {myOrders?.map((myOrder) => (
                            <TableRow
                                key={myOrder?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell style={{ width: '20%' }} align="center" >{myOrder?.name}</TableCell>
                                <TableCell align="right">{myOrder?.price}</TableCell>
                                <TableCell style={{ width: '20%' }} align="right">{myOrder?.img}</TableCell>
                                <TableCell align="center">
                                    <FormControl fullWidth>
                                        <FormControl fullWidth>
                                            <NativeSelect
                                                onChange={handleChange}
                                                defaultValue={myOrder?.status}
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
                                    <Button variant="outlined" sx={{ m: 2 }} onClick={() => handleUpdate(myOrder?._id)} color="success" startIcon={<DeleteIcon />}>
                                        Update
                                    </Button>
                                    <Button variant="outlined" sx={{ m: 2 }} onClick={() => handleDelete(myOrder?._id)} color="error" startIcon={<DeleteIcon />}>
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
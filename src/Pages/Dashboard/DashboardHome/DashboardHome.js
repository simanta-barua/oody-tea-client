import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ProductTotal from '../ProductTotal/ProductTotal';
import AddProduct from '../AddProduct/AddProduct';
import { AppBar, ListItem } from '@mui/material';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import OrdersStatus from '../OrdersStatus/OrdersStatus';


const drawerWidth = 240;
const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Dash Board
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        <ListItem button >
                            <Link to={`${url}`}>ProductTotal</Link>
                        </ListItem>
                        <ListItem button >
                            <Link to={`${url}/addproduct`}>AddProduct</Link>
                        </ListItem>
                        <ListItem button >
                            <Link to={`${url}/manageproduct`}>Manage Product</Link>
                        </ListItem>
                        <ListItem button >
                            <Link to={`${url}/manageorders`}>Manage Orders</Link>
                        </ListItem>
                        <ListItem button >
                            <Link to={`${url}/ordersstatus`}> Orders Status</Link>
                        </ListItem>

                    </List>
                    <Divider />
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <ProductTotal />
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProduct />
                        </Route>
                        <Route path={`${path}/manageproduct`}>
                            <ManageProduct />
                        </Route>
                        <Route path={`${path}/manageorders`}>
                            <ManageOrder />
                        </Route>
                        <Route path={`${path}/ordersstatus`}>
                            <OrdersStatus />
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </>
    );
};

export default Dashboard;
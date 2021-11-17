import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { AppBar, ListItem } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ProductTotal from '../../ClientDashBoard/ProductTotal/ProductTotal';
import ManageProduct from '../ManageProduct/ManageProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrder from '../ManageOrder/ManageOrder';



const drawerWidth = 240;
const DashboardAdmin = () => {
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
                            <Link to={`${url}`}>Home</Link>
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
                            <Link to={`${url}/makeadmin`}> Make Admin</Link>
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
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin />
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </>
    );
};

export default DashboardAdmin;
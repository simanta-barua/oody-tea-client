import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ListItemText, Menu, MenuItem, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { AccountCircle } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../assets/logo.png'
const Header = () => {
  const { user, logout } = useAuth();
  const [state, setState] = React.useState(false);
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navLink: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important'
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      },
    },
    listItem: {
      textDecoration: 'none'
    }
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const { navItem, navIcon, navLink, navLogo, listItem } = useStyle();


  const list = (
    <Box
      sx={{ width: 150 }}
    >
      <Divider />
      <List>
        <ListItem button >
          <ListItemText > <Link className={listItem} to="/home">Home</Link></ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText > <Link className={listItem} to="/product">Products</Link></ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText > <Link className={listItem} to="/about">About</Link></ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar >
            <IconButton

              edge="start"
              color="inherit"
              aria-label="menu"

              className={navIcon}
              onClick={() => setState(true)}

            ><MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={navLogo}>
              <img src={logo} alt="" />
            </Typography>
            <Box className={navLink} sx={{ flexGrow: 1 }}>
              <Link className={navItem} to="/home"><Button color="inherit">Home</Button></Link>
              <Link className={navItem} to="/product"><Button color="inherit">Products</Button></Link>
              <Link className={navItem} to="/About"><Button color="inherit">About</Button></Link>
            </Box>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/myorder">
              <Button color="inherit">My Order</Button>
            </Link>
            {
              user?.email ?
                <Box>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                  </Link>
                  <Button onClick={logout} color="inherit">Logout</Button>
                </Box>
                :
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/signin">
                  <Button color="inherit">Login</Button>
                </Link>
            }
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem >Profile</MenuItem>
              <MenuItem >My account</MenuItem>

            </Menu>

          </Toolbar>
        </AppBar>
      </Box>


      <React.Fragment >

        <Drawer
          open={state}
          onClose={() => setState(false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Header;
import React from 'react';
import '../static/css/styles.css';
import logo from '../static/images/logo.png';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
          <img className="logo" src={logo} alt="" />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            
          </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;

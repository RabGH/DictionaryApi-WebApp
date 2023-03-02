import React from 'react';
import logo from '../static/images/logo.png';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MUIButton from './MUIButton';
import { headerStyles, typographyHeader } from '../styles/home';

function Header() {
  return (
    <AppBar position="static" sx={{ headerStyles }}>
      <Toolbar>
          <img className="logo" src={logo} alt="" />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            
          </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;

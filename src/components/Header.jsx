import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../static/images/logo.png';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MUIButton from './MUIButton';
import { headerStyles, typographyHeader } from '../styles/home';

function Header() {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ headerStyles }}>
          <img className="logo" src={logo} alt="" />
          <Typography variant='h6' component='div' sx={{ typographyHeader }}>
            
          </Typography>
          {location.pathname === '/' ? (
            <MUIButton onClick={() => (window.location.href = '/contact')}>
              Contact
            </MUIButton>
          ) : (
            <MUIButton onClick={() => (window.location.href = '/')}>
              Home
            </MUIButton>
          )}
      </Toolbar>
    </AppBar>
  )
}

export default Header;

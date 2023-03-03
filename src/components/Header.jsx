import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../static/images/logo.png';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HomeButton from './buttons/HomeButton';
import ContactButton from './buttons/ContactButton';
import { Box, Container } from '@mui/material';

function Header() {
  const location = useLocation();

  return (
    
      <AppBar position="static">
      <Container>
        <Toolbar sx={{ display: 'flex',
                       justifyContent: 'space-between',
                     }}>
            <Box>
              <img className="logo" src={logo} alt="" />
            </Box>
            <Box>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                
              </Typography>
            </Box>
            {location.pathname === '/' ? (
              <Box>
                <ContactButton onClick={() => (window.location.href = '/contact')} sx={{ backgroundColor: 'pink'}} label="Contact">
                  Contact
                </ContactButton>
              </Box>
            ) : (
              <Box>
                <HomeButton onClick={() => (window.location.href = '/')} label="Home" sx={{ backgroundColor: 'pink' }}>
                  Home
                </HomeButton>
              </Box>
            )}
        </Toolbar>
        </Container>
      </AppBar>
    
  )
}

export default Header;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HomeButton from './buttons/HomeButton';
import ContactButton from './buttons/ContactButton';

function Footer() {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ top: 'auto',
                                        bottom: 0, 
                                      }}>
            <Toolbar sx={{ display: 'flex', 
                           justifyContent: 'space-between',
                           top: 'auto',
                           bottom: 0,
                           width: '100%', 
                        }}>
                <Typography variant='body2' sx={{ flexGrow: 1 }}>
                    Dictionary API &copy; 2023
                </Typography>
                <Typography variant='body2' sx={{ marginRight: '1rem' }}>
                    Made with love by Rabii Ghaith
                </Typography>
                {location.pathname === '/contact' ? (
                <HomeButton onClick={() => (window.location.href = '/')} sx={{ backgroundColor: 'pink', '&:hover':{backgroundColor:'#fc5185'} }} label="">
                    Home
                </HomeButton>
                ) : (
                <ContactButton onClick={() => (window.location.href = '/contact')} sx={{ backgroundColor: 'pink', '&:hover':{backgroundColor:'#fc5185'} }} label="">
                    Contact
                </ContactButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Footer;

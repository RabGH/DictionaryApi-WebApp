import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MUIButton from '../components/MUIButton';
// import { footerStyles, fAppBarStyles, typographyCopyRight, typographyL } from '../styles/home';

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
                <MUIButton onClick={() => (window.location.href = '/')}>
                    Home
                </MUIButton>
                ) : (
                <MUIButton onClick={() => (window.location.href = '/contact')}>
                    Contact
                </MUIButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Footer;

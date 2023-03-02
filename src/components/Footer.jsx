import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MUIButton from '../components/MUIButton';
import { footerStyles, fAppBarStyles, typographyCopyRight, typographyLove } from '../styles/home';

function Footer() {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ fAppBarStyles }}>
            <Toolbar sx={{ footerStyles }}>
                <Typography variant='body2' sx={{ typographyCopyRight }}>
                    Dictionary API &copy; 2023
                </Typography>
                <Typography variant='body2' sx={{ typographyLove }}>
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

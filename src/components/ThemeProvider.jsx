import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#fc5185',
        },
        background: {
            default: '#333333',
            paper: '#FAFAFA'
        },
    },
});

function MUI({ children }) {
    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    );
}

export default MUI;
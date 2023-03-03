import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#333333",
                    fontFamily: 'Roboto, sans-serif',
                },
                "*": {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0,
                },
                a: {
                    textDecoration: "none",
                },
                ul: {
                    listStyles: 'none',
                },
            },
        },
    },
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
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
        },
    },
    typography: {

        fontFamily: 'Roboto, sans-serif',
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightBold: 700,

        h1: {
            color: "#fc5185",
        },
        h2: {
            color: "#fc5185"
        },

        h3: {
            color: "#fc5185"
        },
        h4: {
            color: "#fc5185"
        },
        h5: {
            color: "#fc5185"
        },
        h6: {
            color: "#fc5185"
        },

        body1: {
            color: "#FFFFFF",
        },
        
        body2: {
            color: "#000000",
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
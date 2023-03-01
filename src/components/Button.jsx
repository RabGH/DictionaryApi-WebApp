import React from 'react';
import Button from '@mui/material/Button';

function MUIButton({ onClick, children }) {
    return (
        <Button variant="contained" color="secondary" onClick={onClick}>
            { children }
        </Button>
    );
}

export default MUIButton;
import React from 'react';
import Button from '@mui/material/Button';

function MUIButton({ onClick, children, className, spacing }) {
    return (
        <Button className={className} spacing={spacing} variant="contained" color="secondary" onClick={onClick}>
            { children }
        </Button>
    );
}

export default MUIButton;
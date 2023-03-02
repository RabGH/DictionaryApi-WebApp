import React from 'react';
import Button from '@mui/material/Button';

function MUIButton({ type, onClick, children, className }) {
  if (type === 'submit') {
    return (
      <Button
        className={className}
        variant="contained"
        color="secondary"
        type={type}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  } else if (type === 'reset') {
    return (
      <Button
        className={className}
        variant="contained"
        color="secondary"
        type={type}
      >
        {children}
      </Button>
    );
    } else {
      return (
      <Button
        className={className}
        variant="contained"
        color="secondary"
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
}

export default MUIButton;

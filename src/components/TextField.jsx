import React from 'react';
import TextField from '@mui/material/TextField';


function MUITextField(props) {
    return (
        <div>
            <TextField
                id={props.id}
                label={props.label}
                name={props.name}
                type={props.type}
                variant="outlined"
                required={props.required}
            />
        </div>
    )
}

export default MUITextField;
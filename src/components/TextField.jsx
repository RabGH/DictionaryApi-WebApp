import React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';



function MUITextField(props) {
    const { multiline } = props;

    return (
        <Container>
            <TextField
                id={props.id}
                label={props.label}
                name={props.name}
                type={props.type}
                variant="filled"
                required={props.required}
                multiline={multiline}
                rows={props.rows}
                style={multiline ? { width: '100%', margin:'0 auto' } : { width: '100%' }}
            />
        </Container>
    )
}

export default MUITextField;
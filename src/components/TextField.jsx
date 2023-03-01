import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
       },
    },
}));

function CustomizeInputs(props) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete='off'>
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
        </form>
    )
}

export default CustomizeInputs;
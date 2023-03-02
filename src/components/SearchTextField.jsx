import React from 'react';
import TextField from '@mui/material/TextField';
import '../static/css/styles.css';
import { TextFieldDesign } from './sx_routes';


function SearchTextField(props) {
  return (
    <TextField
        sx={TextFieldDesign}
        className='search-text-field-pos'
        type='text'
        value={props.word}
        onChange={props.handleWordChange}
        label='Enter a word'
        variant='outlined'
        color='secondary'
        required
    />
  );
}

export default SearchTextField
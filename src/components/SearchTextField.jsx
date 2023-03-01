import React from 'react';
import TextField from '@mui/material/TextField';
import '../static/css/styles.css';
import '../static/css/mui.css';

function SearchTextField(props) {
  return (
    <TextField
        className='input'
        type='text'
        value={props.word}
        onChange={props.handleWordChange}
        label='Enter a word'
        variant='outlined'
        required
    />
  );
}

export default SearchTextField
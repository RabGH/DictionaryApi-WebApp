import React from 'react';
import TextField from '@mui/material/TextField';
import { SearchFieldDesign } from '../styles/home';


function SearchTextField(props) {
  return (
    <TextField
        sx={SearchFieldDesign}
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
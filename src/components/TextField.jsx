import React from 'react';
import TextField from '@mui/material/TextField';

function SearchTextField(props) {
  return (
    <form className='form' onSubmit={props.handleSearch}>
        <TextField
            className='input'
            type='text'
            value={props.word}
            onChange={props.handleWordChange}
            label='Enter a word'
            variant='outlined'
            required
        />
    </form>
  );
}

export default SearchTextField
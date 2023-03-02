import React from 'react';
import TextField from '@mui/material/TextField';
import '../static/css/styles.css';


function SearchTextField(props) {
  return (
    <TextField
        sx={{
            '& label.Mui-focused': {
              color: '#fc5185',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#fc5185', 
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fc5185',
              },
            '&:hover fieldset': {
              borderColor: '#fc5185',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fc5185',
            },
          },
        }}
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
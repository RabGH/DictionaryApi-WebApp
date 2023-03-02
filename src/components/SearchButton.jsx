import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';


function SearchButton ({ isLoading, handleClick }) {
    return (
        <LoadingButton
            id='search-btn'
            type='submit'
            className='loading-btn'
            loading={isLoading}
            loadingIndicator={<CircularProgress className="circular-progress-bar" />}
            onClick={handleClick}
            disabled={isLoading}
            color='secondary'
            variant='contained'
            sx={{ 
                marginLeft: '1rem',
                height: '3rem',
                width: '6rem',
             }}

        >
            {isLoading ? 'Loading...' : 'Search'}
        </LoadingButton>
    );
}

export default SearchButton;

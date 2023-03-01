import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import '../static/css/mui.css';

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

        >
            {isLoading ? 'Loading...' : 'Search'}
        </LoadingButton>
    );
}

export default SearchButton;

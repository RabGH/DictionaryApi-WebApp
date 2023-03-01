import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import '../static/css/mui.css';

function SearchButton ({ isLoading, isButtonLoading, handleClick }) {
    return (
        <LoadingButton
            id='search-btn'
            type='submit'
            className='loading-btn'
            loading={isLoading}
            loadingIndicator={<CircularProgress className="circular-progress-bar" />}
            onClick={handleClick}
            disabled={isButtonLoading || isLoading}

        >
            {isButtonLoading ? '' : 'Search'}
        </LoadingButton>
    );
}

export default SearchButton;

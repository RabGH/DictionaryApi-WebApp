import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'
import CircularProgress from '@mui/material/CircularProgress';


class SearchButton extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }


    render() { 
        const { isLoading, handleClick, sx } = this.props;


        return ( 
            <LoadingButton
                type='submit'
                sx={sx}
                loading={isLoading}
                loadingIndicator={<CircularProgress className="circular-progress-bar" />}
                onClick={handleClick}
                startIcon={<SearchTwoToneIcon />}
                disabled={isLoading}
                color='secondary'
                variant='contained'
                label="Search"
            >
                {isLoading ? 'Loading...' : 'Search'}
            </LoadingButton>
        );
    }
}

export default SearchButton;

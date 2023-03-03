import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

class DeleteButton extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                variant='outlined'
                color='secondary'
                type='reset'
                onClick={this.props.onClick}
                startIcon={<DeleteIcon />}
            >
                {this.props.label}
            </Button>
        );
    }
}

export default DeleteButton;
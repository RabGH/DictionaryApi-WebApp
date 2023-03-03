import React from 'react';
import Button from '@mui/material/Button';
import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailTwoTone';

class ContactButton extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { sx } = this.props;

        return (
            <Button
                variant="elevated"
                color='secondary'
                type='button'
                onClick={this.props.onClick}
                startIcon={<ContactMailTwoToneIcon />}
                sx={sx}
            >
                {this.props.label}
            </Button>
            
        );
    }
}

export default ContactButton;

import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

class SubmitButton extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={this.props.onClick}
        endIcon={<SendIcon />}
      >
        {this.props.label}
      </Button>
    );
  }
}

export default SubmitButton;

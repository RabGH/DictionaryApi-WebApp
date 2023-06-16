import React from "react";
import Button from "@mui/material/Button";
import DoorBackTwoToneIcon from "@mui/icons-material/DoorBackTwoTone";

class HomeButton extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { sx } = this.props;

    return (
      <Button
        variant="elevated"
        color="secondary"
        type="button"
        onClick={this.props.onClick}
        startIcon={<DoorBackTwoToneIcon />}
        sx={sx}
      >
        {this.props.label}
      </Button>
    );
  }
}

export default HomeButton;

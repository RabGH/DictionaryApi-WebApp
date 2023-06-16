import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import FindReplaceTwoToneIcon from "@mui/icons-material/FindReplaceTwoTone";
import CircularProgress from "@mui/material/CircularProgress";

class RandomButton extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading, sx, isRandomizing } = this.props;

    return (
      <LoadingButton
        variant="contained"
        color="primary"
        type="submit"
        onClick={this.props.onClick}
        startIcon={<FindReplaceTwoToneIcon />}
        sx={sx}
        loading={isLoading}
        loadingIndicator={
          <CircularProgress className="circular-progress-bar" />
        }
        label={isRandomizing ? "Randomizing..." : "Randomize"}
      >
        {isLoading ? "Loading..." : "Randomize"}
      </LoadingButton>
    );
  }
}

export default RandomButton;

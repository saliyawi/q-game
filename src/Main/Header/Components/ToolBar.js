import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClassNames from "classnames";
import classes from "./ToolBar.module.css";

// const styles = () => ({
//     root: {
//         width: 'calc(100%)',
//         justifyContent: "space-between"
//     },

// });

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={ClassNames(
          classes.root,
          classes.mFont,
          classes.flexRowReverse,
          classes.color2
        )}
      ></div>
    );
  }
}

// ToolBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// const ToolBarWithStyles = withStyles(styles)(ToolBar);

export default ToolBar;

import React from "react";
import classes from "./Overlay.module.css";
import PropTypes from "prop-types";

const Overlay = (props) => {
  return props.show ? (
    <div className={classes.Overlay} onClick={props.clicked}></div>
  ) : null;
};
Overlay.propTypes = {
  show: PropTypes.bool,
};

export default Overlay;

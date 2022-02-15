import React from "react";
import classes from "./BuildControl.module.css";
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.p}>{props.label}</p>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};
export default BuildControl;

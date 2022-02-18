import React from "react";
import classes from "./HamburgerMenu.module.css";
const HamburgerMenu = (props) => {
  return (
    <button className={classes.HamburgerMenu} onClick={props.clicked}></button>
  );
};

export default HamburgerMenu;

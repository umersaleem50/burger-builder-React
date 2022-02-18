import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.showSideDrawer) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default SideDrawer;

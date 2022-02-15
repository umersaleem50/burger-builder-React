import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import HamburgerMenu from "../../UI/Button/HamburgerMenu/HamburgerMenu";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerMenu clicked={props.showSideDrawer} />
      <Logo />
      <nav className={classes.DisplayOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;

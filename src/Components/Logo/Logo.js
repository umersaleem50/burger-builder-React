import React from "react";
import LogoFile from "../../assets/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={LogoFile} alt="Logo" />
    </div>
  );
};

export default Logo;

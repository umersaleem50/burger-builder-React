import React, { Component } from "react";
import Aux from "../Aux/Aux";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Overlay from "../../Components/UI/Overlay/Overlay";
class Layout extends Component {
  state = {
    showSlider: false,
  };
  showSideHandler = () => {
    this.setState({ showSlider: true });
  };

  closeSliderHandler = () => {
    this.setState({ showSlider: false });
  };

  render() {
    return (
      <Aux>
        <Overlay
          show={this.state.showSlider}
          clicked={this.closeSliderHandler}
        />
        <Toolbar showSideDrawer={this.showSideHandler} />
        <SideDrawer showSideDrawer={this.state.showSlider} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

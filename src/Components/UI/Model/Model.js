import React, { Component } from "react";
import classes from "./Model.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Overlay from "../Overlay/Overlay";
class Model extends Component {
  shouldComponentUpdate = (prevProps, prevState) => {
    return (
      prevProps.show !== this.props.show ||
      prevProps.children !== this.props.children
    );
  };

  render() {
    return (
      <Aux>
        <Overlay
          show={this.props.show}
          clicked={this.props.toggleModel}
        ></Overlay>
        <div
          className={classes.Model}
          style={{
            transform: this.props.show
              ? "translate(-50%,-50%)"
              : "translate(-50%,-150vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Model;

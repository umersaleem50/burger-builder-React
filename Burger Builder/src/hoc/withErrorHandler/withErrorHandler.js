import React, { Component } from "react";
import Model from "../../Components/UI/Model/Model";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
      };

      this.reqInterceptors = axios.interceptors.request.use(
        (request) => {
          return request;
        },
        (error) => {
          console.warn(error);
          this.setState({ error: error });
          // throw error;
        }
      );
      this.resInterceptors = axios.interceptors.response.use(null, (err) => {
        console.log(this.state.error);
        this.setState({ error: err });
        //   throw err;
      });
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }

    confirmErrorHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Model show={this.state.error} toggleModel={this.confirmErrorHandler}>
            {this.state.error ? <p>{this.state.error.message}</p> : null}
          </Model>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;

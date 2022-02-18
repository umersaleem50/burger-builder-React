import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/Checkout" exact component={Checkout} />
            <Route path="/" component={BurgerBuilder} />
            {/* <BurgerBuilder /> */}
            {/* <Checkout /> */}
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;

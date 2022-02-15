import React, { Component } from "react";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Burger from "../../Components/Burger/Burger";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Model from "../../Components/UI/Model/Model";
import Aux from "../../hoc/Aux/Aux";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICE = {
  salad: 0.4,
  bacon: 0.5,
  meat: 1.14,
  cheese: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    parchaseable: false,
    parchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://burger-builder-react-9edf4-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json`
      )
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((err) => this.setState({ error: err }));
  }

  parchaseableHandler(updatedState) {
    const sumOfIngredients = Object.values(updatedState).reduce(
      (sum, el) => sum + el,
      0
    );
    this.setState({ parchaseable: sumOfIngredients > 0 });
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    const ingredientAmount = this.state.ingredients[type] + 1;
    updatedIngredients[type] = ingredientAmount;

    const updatedTotalPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
    this.parchaseableHandler(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldIngredientQuantity = this.state.ingredients[type];
    if (oldIngredientQuantity <= 0) return;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    const ingredientQuantity = oldIngredientQuantity - 1;
    updatedIngredients[type] = ingredientQuantity;

    const updatedTotalPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice,
    });
    this.parchaseableHandler(updatedIngredients);
  };

  parchaseHandle = () => {
    this.setState({ parchasing: !this.state.parchasing });
  };

  parchaseContinueHandler = () => {
    this.setState({ loading: true });
    const data = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: "Max millian",
        address: {
          street: "123 block 1",
          house: "225",
          city: "lahore",
        },
      },
      dilerver: "fastest",
    };
    axios
      .post("/orders.json", data)
      .then((response) => this.setState({ loading: false, parchasing: false }))
      .catch((error) => this.setState({ loading: false, parchasing: false }));
    // alert("You continue!");
  };

  //Course teacher used closeModelHandler, But I used parchaseHandler for both Ordering
  //and closing overlay
  // Enable Below method if you wanna closeModelHandler
  ///////////////////////////////////////////
  // parchaseHandle = () => {
  //   this.setState({ parchasing: true });
  // };
  // closeModelHandler = () => {
  //   this.setState({parchasing: false})
  // }
  //////////////////////////////////////////////////
  //pass closeModelHandler to toggleModel => <Model/> if you wanna follow the course
  render() {
    const disabledButtonInfo = {
      ...this.state.ingredients,
    };
    for (let item in disabledButtonInfo) {
      disabledButtonInfo[item] = disabledButtonInfo[item] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Can't fatch ingredients!</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledButton={disabledButtonInfo}
            price={this.state.totalPrice}
            canOrder={this.state.parchaseable}
            ordering={this.parchaseHandle}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          parchaseContinue={this.parchaseContinueHandler}
          parchaseCancel={this.parchaseHandle}
          price={+this.state.totalPrice.toFixed(2)}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Model show={this.state.parchasing} toggleModel={this.parchaseHandle}>
          {orderSummary}
        </Model>
        {burger}
      </Aux>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);

import React from "react";
import classes from "./OrderSummary.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

const OrderSummary = (props) => {
  const SummaryIngredients = Object.keys(props.ingredients).map((ingKey) => (
    <li key={ingKey} style={{ textTransform: "capitalize" }}>
      {ingKey}: {props.ingredients[ingKey]}
    </li>
  ));

  const price = new Intl.NumberFormat(Navigator.language, {
    style: "currency",
    currency: "USD",
  }).format(props.price);

  return (
    <Aux>
      <p>Your Order</p>
      <p>A delicious burger with following ingredients:</p>
      <ul className={classes.SummaryList}>{SummaryIngredients}</ul>
      <p>
        <strong>Total Price: {price}</strong>
      </p>
      <p>Continue to Checkout?</p>

      <Button btnType={"Danger"} clicked={props.parchaseCancel}>
        Cancel
      </Button>
      <Button btnType={"Sucess"} clicked={props.parchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  parchaseCancel: PropTypes.func,
  parchaseContinue: PropTypes.func,
};

export default OrderSummary;

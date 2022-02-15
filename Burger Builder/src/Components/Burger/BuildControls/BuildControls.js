import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];
const BuildControls = (props) => {
  const price = new Intl.NumberFormat(Navigator.language, {
    style: "currency",
    currency: "USD",
  }).format(props.price.toFixed(2));

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price}</strong>
      </p>
      {controls.map((controlItem) => (
        <BuildControl
          key={controlItem.label}
          label={controlItem.label}
          added={() => props.addIngredient(controlItem.type)}
          removed={() => props.removeIngredient(controlItem.type)}
          disabled={props.disabledButton[controlItem.type]}
        />
      ))}
      <button
        className={classes.btnOrder}
        disabled={!props.canOrder}
        onClick={props.ordering}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;

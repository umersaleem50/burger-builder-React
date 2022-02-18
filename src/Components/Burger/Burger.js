import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let trasnformedIngredients = Object.keys(props.ingredients)
    .map((igKey) =>
      [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((prevEl, currentEl) => prevEl.concat(currentEl), []);

  if (trasnformedIngredients.length === 0) {
    trasnformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {trasnformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

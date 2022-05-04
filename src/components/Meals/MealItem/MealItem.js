import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    if (amount > 1) {
      cartCtx.addMultiItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    } else {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    }
  };
  return (
    <li>
      <div className={classes.meal}>
        <div className={classes.mealOrder}>
          <div>
            <h3>{props.name}</h3>
            <div className={classes.price}>{price}</div>
          </div>
          <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
        <div className={classes.description}>{props.description}</div>
      </div>
    </li>
  );
};

export default MealItem;

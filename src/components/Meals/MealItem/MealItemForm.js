import React, { useRef, useState } from "react";

import Input from "../..//UI/Input";
import Button from "../..//UI/Button";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [amount, setAmount] = useState(1);
  const amountInputRef = useRef();

  const incrementHandler = () => {
    if (amount < 5) setAmount((amount) => amount + 1);
  };

  const decrementHandler = () => {
    if (amount > 1) setAmount((amount) => amount - 1);
  };

  const submitHandler = () => {
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <React.Fragment>
      <form className={classes.form}>
        <Button
          className={"decrement"}
          type="button"
          onClick={decrementHandler}
        >
          -
        </Button>
        <Input
          ref={amountInputRef}
          input={{
            id: "amount" + props.id,
            type: "number",
            min: "0",
            max: "5",
            step: "1",
            value: amount,
          }}
        />
        <Button
          className={"increment"}
          type="button"
          onClick={incrementHandler}
        >
          +
        </Button>
      </form>
      <Button
       
        className={"submit"}
        type="button"
        onClick={submitHandler}
      >
        Add to Cart
      </Button>
    </React.Fragment>
  );
};

export default MealItemForm;

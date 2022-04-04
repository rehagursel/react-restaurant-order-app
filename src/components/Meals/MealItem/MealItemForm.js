import React, { useRef, useState } from "react";

import Input from "../..//UI/Input";
import Button from "../..//UI/Button";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

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

    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Button className={"decrement"}>-</Button>
      <Input
        ref={amountInputRef}
        
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={"increment"} type="submit">+</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

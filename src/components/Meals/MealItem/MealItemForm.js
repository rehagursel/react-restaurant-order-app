import Input from "../..//UI/Input";
import Button from "../..//UI/Button";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Button className={('decrement')}>-</Button>
      <Input
        input={{
          id: "amount"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={('increment')}>+</Button>
    </form>
  );
};

export default MealItemForm;

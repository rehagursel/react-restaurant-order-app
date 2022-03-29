import MealItemForm from './MealItemForm';
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li>
      <div className={classes.meal}>
        <div className={classes.mealOrder}>
          <div>
            <h3>{props.name}</h3>
            <div className={classes.price}>{price}</div>
          </div>
          <div>
            <MealItemForm id={props.id}/>
          </div>
        </div>
        <div className={classes.description}>{props.description}</div>
      </div>
    </li>
  );
};

export default MealItem;

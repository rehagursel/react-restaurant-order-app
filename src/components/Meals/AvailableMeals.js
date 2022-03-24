import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Aegean appetizers with olive oil",
    description: "Healthy...and green...",
    price: 4.99,
  },
  {
    id: "m2",
    name: "Breakfast Yogurt Bowl",
    description: "Fresh hazelnuts with Belgian chocolate...",
    price: 12.6,
  },
  {
    id: "m3",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 21.5,
  },
  {
    id: "m4",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 19.99,
  },
  {
    id: "m5",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

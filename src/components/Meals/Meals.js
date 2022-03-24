import React, { Fragment } from "react";

import MealsBanner from "./MealsBanner";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsBanner />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

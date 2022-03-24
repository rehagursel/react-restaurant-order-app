import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton"
import mealsBanner from "../../assets/mealsBanner.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>My Restaurant</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes.mainImage}>
        <img src={mealsBanner} alt="Restaurant Meals" />
      </div>
    </Fragment>
  );
};

export default Header;

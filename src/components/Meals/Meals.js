import MealList from "./MealsList";
import PromoText from "./PromoText";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <PromoText />
      <MealList />
    </React.Fragment>
  );
};

export default Meals;

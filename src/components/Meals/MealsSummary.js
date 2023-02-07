import React from "react";

import styles from './MealsSummary.module.css';


const MealsSummary = () => {
  return (

    <section className={styles.summary}>
      <h2>Virtual Meals to order</h2>
      <p>
        Choose your meal from our extensive list of delicious foods and snacks
      </p>
      <p>
        All of our vegetarian food is made with great care and using locally
        sourced, high-quality organic ingredients
      </p>
    </section>
  );
};

export default MealsSummary;

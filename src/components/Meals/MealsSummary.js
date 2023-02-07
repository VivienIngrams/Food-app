import React from "react";

import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Fresh, locally-sourced organic fruit and vegetables</h2>
      <p>Straight from the farm</p>
    </section>
  );
};

export default MealsSummary;

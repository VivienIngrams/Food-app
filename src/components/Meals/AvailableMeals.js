import React from "react";

import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Leeks",
    description: "Long and lean",
    price: 1.99,
  },
  {
    id: "m2",
    name: "Butternut squash",
    description: "Bright orange and brusting with goodness",
    price: 4.5,
  },
  {
    id: "m3",
    name: "Green Onions",
    description: "Delicious both cooked and raw",
    price: 2.99,
  },
  {
    id: "m4",
    name: "Shitake mushrooms",
    description: "Extra tasty japanese variety",
    price: 8.99,
  },
  {
    id: "m5",
    name: "Sweet potatoes",
    description: "Hearty and healthy",
    price: 3.75,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

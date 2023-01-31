import React from "react";

import foodImage from "../../assets/food.jpeg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={foodImage} alt="Yummy food!" />
      </div>
    </>
  );
};

export default Header;

import React from 'react';

import Header from './components/Layout/Header';
import Meals from  './components/Meals/Meals';
import styles from './App.module.css';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
    <Cart />
    <Header />
    <main className={styles.main}>
      <Meals/>
    </main>
    </>
  );
}

export default App;

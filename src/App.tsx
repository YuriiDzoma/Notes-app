import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}

export default App;

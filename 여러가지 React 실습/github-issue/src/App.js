import styles from './App.module.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <div className={styles.nav}>NAV</div>
      <div className={styles.header}>Header</div>
      <div className={styles.listContainer}>listContainer</div>
      <div className={styles.footer}>footer</div>
    </>
  );
}

export default App;

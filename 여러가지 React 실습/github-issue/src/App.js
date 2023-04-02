import styles from './App.module.css';
import React, { useEffect } from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className={styles.nav}>NAV</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;

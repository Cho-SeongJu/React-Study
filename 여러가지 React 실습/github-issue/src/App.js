import styles from './App.module.css';
import React, { useEffect } from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Issue from './pages/Issue';
import Code from './pages/Code';
import Actions from './pages/Actions';
import Projects from './pages/Project';
import Security from './pages/Security';
import PullRequest from './pages/PullRequest';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Issue />}
        />
        <Route
          path="/issue"
          element={<Issue />}
        />
        <Route
          path="/code"
          element={<Code />}
        />
        <Route
          path="/pulls"
          element={<PullRequest />}
        />
        <Route
          path="/actions"
          element={<Actions />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/security"
          element={<Security />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

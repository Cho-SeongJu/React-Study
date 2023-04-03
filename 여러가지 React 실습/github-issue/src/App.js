import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Issue from './pages/Issue';
import Code from './pages/Code';
import Actions from './pages/Actions';
import Projects from './pages/Project';
import Security from './pages/Security';
import PullRequest from './pages/PullRequest';
import Nav from './components/Nav';
import CreateIssue from './pages/CreateIssue';
// import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useUser } from './hooks';

/*
  context api  전역적인 정보를 따로 prop 드릴링 없이 사용할 때 사용
  -> 굳이 사용하지 않아도 된다면 
  커스텀 hooks로 빼내어 사용
  -> hook로 선언한 부분이 반복적으로 네트워크 콜을 유발한다면, cache를 통해서 개선해볼 수 있다.
*/

// 캐시 - 쉽게 변하지 않는 데이터를 임시적으로 저장해두는 부분 User

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          path="/new"
          element={<CreateIssue />}
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
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./blog/components/MainPage";
import TechPage from "./blog/components/TechPage";
import BlogPage from "./blog/components/BlogPage";
import JavaScriptPage from "./blog/components/JavaScriptPage";
import ReactPage from "./blog/components/ReactPage";
import ReactDocPage from "./blog/components/ReactDocPage";
import UserStore from "./blog/components/store/user";

// root url : main page component
// tech url : tech page component
// blog url : blog page component

//UserStore 하위 컴포넌트에서만 사용할 수 있다.

export default function App() {
  return (
    <UserStore>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/tech"} element={<TechPage />}>
            <Route path="javascript" element={<JavaScriptPage />} />
            <Route path="react" element={<ReactPage />} />
            <Route path="react/:docId" element={<ReactDocPage />} />
            {/* <Route index path="react" element={<ReactPage />} /> */}
            {/* 둘 다 아니면 index에 해당한 경로로 이동. default값으로 생각하면 된다. */}
          </Route>
          <Route path={"/blog"} element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

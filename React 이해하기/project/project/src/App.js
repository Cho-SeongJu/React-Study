import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./blog/components/MainPage";
import TechPage from "./blog/components/TechPage";
import BlogPage from "./blog/components/BlogPage";
import JavaScriptPage from "./blog/components/JavaScriptPage";
import ReactPage from "./blog/components/ReactPage";
import ReactDocPage from "./blog/components/ReactDocPage";

// root url : main page component
// tech url : tech page component
// blog url : blog page component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />}></Route>
        <Route path={"/tech"} element={<TechPage />}>
          <Route path="javascript" element={<JavaScriptPage />} />
          <Route path="react" element={<ReactPage />} />
          <Route path="react/:docId" element={<ReactDocPage />} />
        </Route>
        <Route path={"/blog"} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

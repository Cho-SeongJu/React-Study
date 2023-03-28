import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./blog/components/MainPage";
import TechPage from "./blog/components/TechPage";
import BlogPage from "./blog/components/BlogPage";

// root url : main page component
// tech url : tech page component
// blog url : blog page component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />}></Route>
        <Route path={"/tech"} element={<TechPage />}></Route>
        <Route path={"/blog"} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

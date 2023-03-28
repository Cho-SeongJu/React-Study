import React from "react";
import ReactDOM from "react-dom/client";
// import Cat from "./Cat";
// import CatParent from "./CatParent";
import "./index.css";
// import App from './App';
// import Banner from "./banner/Banner";
// import Toggle from "./toggle";
import reportWebVitals from "./reportWebVitals";
import ToDoList from "./todoList";
// import SimpleForm from "./SimpleForm";
// import UnControlledForm from "./UnControlledForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

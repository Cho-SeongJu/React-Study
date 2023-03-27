import React from "react";
import logo from "../logo.svg";

const name = "hwarari";
const count = 0;
const memo = "";

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. Yahoo !!!!
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {name === "hwarari" && `Hello, ${name}! Learn React`}
        <div>{!!count && <h1>Messages: {count}</h1>}</div>
        {props.title}
      </a>
      {memo !== null && `메모:${memo} `}
    </header>
  );
};

export default Header;

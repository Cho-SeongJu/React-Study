import logo from "./logo.svg";
import "./App.css";

function App() {
  const message = "Learn React";
  // const getGreetingMessage = (name) => {
  //   if (name === "hwarari") return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };

  const name = "hwarari";
  const count = 0;
  const memo = "";
  return (
    <div className="App" tabIndex="0">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Yahoo !!!!
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {name === "hwarari" && `Hello, ${name}! Learn React`}
          <div>{!!count && <h1>Messages: {count}</h1>}</div>
        </a>
        {memo !== null && `메모:${memo} `}
      </header>
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">동의</label>
    </div>
  );
}

export default App;

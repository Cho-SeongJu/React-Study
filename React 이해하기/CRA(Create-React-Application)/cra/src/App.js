import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
function App() {
  const message = "Learn React";
  // const getGreetingMessage = (name) => {
  //   if (name === "hwarari") return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };

  return (
    <div className="App" tabIndex="0">
      <Header />
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">동의</label>
    </div>
  );
}

export default App;

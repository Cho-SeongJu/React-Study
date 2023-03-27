import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  const message = "Learn React";
  // const getGreetingMessage = (name) => {
  //   if (name === "hwarari") return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };
  const info = {
    firstName: "Hwarang",
    lastName: "Lee",
    withImg: true,
  };
  return (
    <div className="App" tabIndex="0">
      <Header title={"Learn React A"} />
      <Welcome {...info} />
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">동의</label>
    </div>
  );
}

export default App;

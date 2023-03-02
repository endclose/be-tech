import { useState } from "react";
import reactLogo from "./assets/logo.svg";

function App() {
  const [count, setCount] = useState(0);
  const clicked = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <img src={reactLogo} alt="Be-Tech Logo" className="logo" />
      <h2>Creating web-based solutions for your business</h2>
      <h2>
        {count} <button onClick={clicked}>Click me!</button>
        <tr></tr>
      </h2>
    </div>
  );
}

export default App;

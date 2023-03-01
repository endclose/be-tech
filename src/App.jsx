import { useState } from "react";
import reactLogo from "./assets/logo.svg";

function App() {
  document.title = "Be-Tech";

  return (
    <div className="app">
      <img src={reactLogo} alt="Be-Tech Logo" className="logo" />
      <h2>Creating web-based solutions for your business</h2>
    </div>
  );
}

export default App;

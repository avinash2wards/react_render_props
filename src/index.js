import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { MouseTracker } from "./MouseTracker.jsx";

function App() {
  return (
    <div className="App">
      <MouseTracker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

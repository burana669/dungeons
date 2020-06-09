import React from "react";
import Inventory from "./components/Inventory/Inventory";

import "./App.css";

import PlayArea from "./components/PlayArea";
import Creator from "./components/Creator";
import HandleKeyPress from "./components/HandleKeyPress";

function App() {
  return (
    <div className="App">
      <HandleKeyPress />
      <Creator />
      <PlayArea />
      <Inventory />
    </div>
  );
}

export default App;

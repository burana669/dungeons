import React from "react";
import CharacterScreen from "./components/CharacterScreen";
import InventoryScreen from "./components/InventoryScreen";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CharacterScreen />
      <InventoryScreen />
    </div>
  );
}

export default App;

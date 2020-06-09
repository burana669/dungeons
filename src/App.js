import React from "react";
import CharacterScreen from "./components/CharacterScreen";
import InventoryScreen from "./components/InventoryScreen";

import "./App.css";

import PlayArea from "./components/PlayArea";
import Creator from "./components/Creator";
import HandleKeyPress from "./components/HandleKeyPress";

function App() {
  return (
    <div className="App">
      <HandleKeyPress />
      <CharacterScreen />

      <Creator></Creator>
      <PlayArea></PlayArea>

      <InventoryScreen />
    </div>
  );
}

export default App;

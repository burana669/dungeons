import React from "react";
import CharacterScreen from "./components/CharacterScreen";
import "./App.css";

import PlayArea from "./components/PlayArea"
import Creator from "./components/Creator"

function App() {
  
  return (
    <div className="App">
      <CharacterScreen />
    
    <Creator></Creator>  
    <PlayArea></PlayArea>
    </div>
  );
}

export default App;

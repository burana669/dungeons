import React from "react";
import CharacterScreen from "./components/CharacterScreen";
import "./App.css";

import Playarea from "./components/Playarea"
import Creator from "./components/Creator"

function App() {
  
  return (
    <div className="App">
      <CharacterScreen />
    
    <Creator></Creator>  
    <Playarea></Playarea>
    </div>
  );
}

export default App;

import React from "react";
import CharacterScreen from "./components/CharacterScreen";
import "./App.css";

import PlayArea from "./components/PlayArea"
import Creator from "./components/Creator"
import HandleKeyPress from "./components/HandleKeyPress"





function App() {
  
  return (
    <div className="App">
      <HandleKeyPress/>
      <CharacterScreen />
      
      <Creator></Creator>  
      <PlayArea></PlayArea>
      
    </div>
  );
}

export default App;

import React from "react";
<<<<<<< HEAD

=======
import Inventory from "./components/Inventory/Inventory";
>>>>>>> 9a7872b0a17411f9527316e1ec9ac70bc355fbe0

import "./App.css";

import Screen from "./components/Screen"
import Creator from "./components/Creator";
import HandleKeyPress from "./components/HandleKeyPress";

function App() {
  return (
    <div className="App">
      <HandleKeyPress />
<<<<<<< HEAD
     

      <Creator></Creator>
      <Screen></Screen>
      
=======
      <Creator />
      <PlayArea />
      <Inventory />
>>>>>>> 9a7872b0a17411f9527316e1ec9ac70bc355fbe0
    </div>
  );
}

export default App;

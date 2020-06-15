import React from "react";
import CharacterScreen from "./CharacterScreen";
import InventoryScreen from "./InventoryScreen";

const Inventory = () => {
  return (
    <div className="inventory-container">
      <CharacterScreen />
      <InventoryScreen />
    </div>
  );
};

export default Inventory;

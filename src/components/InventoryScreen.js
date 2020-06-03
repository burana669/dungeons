import React from "react";
import Item from "./Item";
import Slot from "./Slot";
import { startDrag, drag, drop } from "../actions";

const InventoryScreen = (props) => {
  const mockUpData = [
    {
      id: "1",
      name: "Helmet",
      gategory: "head",
      description: "This is a fine helmet",
      image: "helmet",
    },
    {
      id: "2",
      name: "Sword",
      gategory: "left-hand",
      description: "This is a fine sword",
      image: "sword",
    },
    {
      id: "3",
      name: "Shield",
      gategory: "right-hand",
      description: "This is a fine shield",
    },
    {
      id: "4",
      name: "Chainmail",
      gategory: "torso",
      description: "This is a fine chainmail",
    },
    {
      id: "5",
      name: "Running boot",
      gategory: "left-leg",
      description: "This is a fine left leg boot",
    },
    {
      id: "6",
      name: "Armored boot",
      gategory: "right-leg",
      description: "This is a fine right leg boot",
    },
  ];

  const drop = (e) => {
    e.preventDefault();
    const charSlot = document.getElementById(e.target.id);
    const item = document.getElementById(e.dataTransfer.getData("item"));

    charSlot.appendChild(item);
    item.style.display = "block";
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const renderInventoryItems = mockUpData.map((item) => (
    <Slot>
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        gategory={item.gategory}
        description={item.description}
        draggable={true}
        image={item.image}
      />
    </Slot>
  ));

  return <ul className="inventory-list">{renderInventoryItems}</ul>;
};

export default InventoryScreen;

import React from "react";
import Item from "./Item";
import Slot from "./Slot";

const InventoryScreen = (props) => {
  const mockUpData = [
    {
      id: "1",
      name: "Helmet",
      gategory: "head",
      description: "This is a fine helmet",
      image: "helmet",
      stats: {
        hp: 10,
        attack: 0,
        defense: 5,
      },
    },
    {
      id: "2",
      name: "Sword",
      gategory: "left-hand",
      description: "This is a fine sword",
      image: "sword",
      stats: {
        hp: 0,
        attack: 20,
        defense: 5,
      },
    },
    {
      id: "3",
      name: "Shield",
      gategory: "right-hand",
      description: "This is a fine shield",
      stats: {
        hp: 0,
        attack: 0,
        defense: 9,
      },
    },
    {
      id: "4",
      name: "Chainmail",
      gategory: "torso",
      description: "This is a fine chainmail",
      stats: {
        hp: 20,
        attack: 0,
        defense: 7,
      },
    },
    {
      id: "5",
      name: "Running boot",
      gategory: "left-leg",
      description: "This is a fine left leg boot",
      stats: {
        hp: 0,
        attack: 0,
        defense: 3,
      },
    },
    {
      id: "6",
      name: "Armored boot",
      gategory: "right-leg",
      description: "This is a fine right leg boot",
      stats: {
        hp: 1,
        attack: 0,
        defense: 2,
      },
    },
  ];

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
        stats={item.stats}
      />
    </Slot>
  ));

  return <ul className="inventory-list">{renderInventoryItems}</ul>;
};

export default InventoryScreen;

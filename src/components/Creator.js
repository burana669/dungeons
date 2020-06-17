import React from "react";
import { connect } from "react-redux";
import { createMob, createPlayer, changeView } from "../actions";
import { spawnItem } from "../actions/inventory";

const Creator = (props) => {
  const mockUpData = [
    {
      id: "0",
      name: "Armored boot",
      category: "right-leg",
      description: "This is a fine right leg boot",
      stats: {
        hp: 1,
        attack: 0,
        defense: 2,
      },
    },
    {
      id: "1",
      name: "Helmet",
      category: "head",
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
      category: "left-hand",
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
      category: "right-hand",
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
      category: "chest",
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
      category: "left-leg",
      description: "This is a fine left leg boot",
      stats: {
        hp: 0,
        attack: 0,
        defense: 3,
      },
    },
  ];

  mockUpData.map((item) => {
    props.spawnItem(item);
  });

  const newmob = {
    name: "mölli",
    damage: 4,
    health: 10,
    positionX: 3,
    positionY: 1,
  };

  const newmob2 = {
    name: "lisko",
    damage: 4,
    health: 10,
    positionX: 1,
    positionY: 3,
  };

  const player = {
    name: "MATTI",
    damage: 1,
    health: 100,
    positionX: 2,
    positionY: 3,
  };

  const newView = {
    inventory: true,
    playArea: false,
  };

  props.createMob(newmob);
  props.createMob(newmob2);
  props.createPlayer(player);
  props.changeView(newView);

  return null;
};

export default connect(null, {
  createMob,
  createPlayer,
  spawnItem,
  changeView,
})(Creator);

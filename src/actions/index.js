import { v4 as uuidv4 } from "uuid";

export const createItem = (item) => {
  const { name, bonus, type } = item;
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuidv4(),
      name,
      bonus,
      type,
    },
  };
};

export const equipItem = (item) => {
  const { name, bonus, type, id } = item;
  return {
    type: "EQUIP_ITEM",
    payload: {
      id,
      name,
      bonus,
      type,
    },
  };
};

export const createMob = (mob) => {
  const { name, health, damage, position } = mob;
  return {
    type: "CREATE_MOB",
    payload: {
      id: uuidv4(),
      name,
      health,
      damage,
      position
    },
  };
};

export const rePosition = (newPosition, id) => {
  
  return {
    type: "CHANGE_POSITION",
    payload: {
      id,
      newPosition,
    },
  };
};

export const createPlayer = (player) => {
  const {name, health, damage, position} = player

  return {
    type: "CREATE_PLAYER",
    payload: {
      id: "player",
      name,
      health,
      damage,
      position
    }
  }

}

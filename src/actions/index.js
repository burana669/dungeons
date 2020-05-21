import uuid from "uuid";

export const createItem = (item) => {
  const { name, bonus, type } = item;
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuid(),
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
  const { name, health, damage } = mob;
  return {
    type: "CREATE_MOB",
    payload: {
      id: uuid(),
      name,
      health,
      damage,
    },
  };
};

export const rePosition = (target) => {
  const { oldposition, newposition, id } = target;

  return {
    type: "CHANGE POSITION",
    payload: {
      id,
      oldposition,
      newposition,
    },
  };
};

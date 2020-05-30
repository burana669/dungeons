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
  const { name, health, damage } = mob;
  return {
    type: "CREATE_MOB",
    payload: {
      id: uuidv4(),
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

export const startDrag = (target) => {
  console.log("ACTION: Start dragging");
  return {
    type: "START_DRAG_ITEM",
    paylod: target,
  };
};

export const drag = (target) => {
  console.log("ACTION: Continue dragging");
  return {
    type: "DRAG_ITEM",
    paylod: target,
  };
};

export const drop = (target) => {
  console.log("ACTION: Drop item");
  return {
    type: "DROP_DRAG_ITEM",
    paylod: target,
  };
};

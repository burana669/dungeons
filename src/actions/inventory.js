export const startDrag = (item) => {
  // console.log("ACTION: Start dragging");
  return {
    type: "START_DRAG_ITEM",
    payload: item,
  };
};

export const drag = (item) => {
  console.log("ACTION: Continue dragging");
  return {
    type: "DRAG_ITEM",
    payload: item,
  };
};

export const drop = (item, slot) => {
  console.log(`ACTION: Drop item. ITEM ID: ${item} SLOT ID: ${slot}`);
  return {
    type: "DROP_DRAG_ITEM",
    payload: { item, slot },
  };
};

export const spawnItem = (item) => {
  const { id, name, category, description, image, stats } = item;
  return {
    type: "SPAWN_ITEM",
    payload: { id, name, category, description, image, stats },
  };
};

export const moveItem = (item) => {
  return {
    type: "MOVE_ITEM",
    payload: item,
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

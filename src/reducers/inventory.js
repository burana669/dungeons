import { moveItem } from "../actions/inventory";

export const inventoryReducer = (inventory = [], action) => {
  switch (action.type) {
    case "SPAWN_ITEM":
      return [...inventory, action.payload];

    case "START_DRAG_ITEM":
      console.log(`REDUCER - START DRAG ITEM:`);
      console.log(action.payload);
      return inventory;

    case "DRAG_ITEM":
      console.log(`REDUCER - KEEP DRAGGING ITEM:`);
      console.log(action.payload);
      return inventory;

    case "DROP_DRAG_ITEM":
      console.log(`INVENTORY REDUCER - DROP ITEM:`);
      console.log(action.payload.item);

      return [...inventory, action.payload.item];
    default:
      return inventory;
  }
};

export const equipmentReducer = (equipment = [], action) => {
  switch (action.type) {
    case "EQUIP_ITEM":
    if(!equipment.map(element =>  {
      if (element.category.includes(action.payload.category)){
        return true
      } 

    })) {
    return [...equipment, action.payload]
    }
   else return equipment
   
  default:
  return equipment;
};
}

export const dragReducer = (dragItem = {}, action) => {
  switch (action.type) {
    case "START_DRAG_ITEM":
      console.log("REDUCER - DRAGGING STARTS ON ITEM");
      console.log(action.payload);

      return action.payload;

    case "DRAG_ITEM":
      console.log("REDUCER: DRAGGING CONTINUES");
      return action.payload;

    case "DROP_DRAG_ITEM":
      console.log("REDUCER: DROPPING ITEM");
      return {};
    default:
      return dragItem;
  }
};

import { combineReducers } from "redux";

const inventoryReducer = (inventory = [], action) => {
  return inventory;
};

const dragReducer = (dragItem = [], action) => {
  switch (action.type) {
    case "START_DRAG_ITEM":
      console.log("REDUCER: DRAGGING STARTS");
      return [action.payload];

    case "DRAG_ITEM":
      console.log("REDUCER: DRAGGING CONTINUES");
      return [action.payload];

    case "DROP_DRAG_ITEM":
      console.log("REDUCER: DROPPING ITEM");
      return dragItem;
    default:
      return dragItem;
  }
};

const statReducer = (stats = [], action) => {
  return stats;
};
const equipmentReducer = (equipment = [], action) => {
  return equipment;
};
const playAreaReducer = (positions = [], action) => {
  return positions;
};
const enemiesReducer = (mobs = [], action) => {
  return mobs;
};

export default combineReducers({
  inventoryReducer,
  dragReducer,
  statReducer,
  equipmentReducer,
  playAreaReducer,
  enemiesReducer,
});

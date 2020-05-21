import { combineReducers } from "redux";

const inventoryReducer = (inventory = [], action) => {
  return inventory;
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
  statReducer,
  equipmentReducer,
  playAreaReducer,
  enemiesReducer,
});

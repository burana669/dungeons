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
const playareaReducer = (positions = [], action) => {

  switch(action.type) {
    case "CREATE_MOB":
    const newposition = {
      name: action.payload.name,
      id: action.payload.id,
      position: action.payload.position
    }
    return [...positions, newposition]
  default:
  return positions;
  }
};
const enemiesReducer = (mobs = [], action) => {
  return mobs;
};

export default combineReducers({
  inventoryReducer,
  statReducer,
  equipmentReducer,
  playareaReducer,
  enemiesReducer,
});

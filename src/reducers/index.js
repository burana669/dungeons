import { combineReducers } from "redux";

const inventoryReducer = (inventory = [], action) => {
  return inventory;
};

const playerReducer = (stats = [], action) => {
  switch(action.type) {
    case "CREATE_PLAYER":
      const newStats = {
        name: action.payload.name,
        health: action.payload.health,
        damage: action.payload.damage,
        position: action.payload.position
      }
      return newStats
    case "CHANGE_POSITION":
      if (action.payload.id === "player") {
        const newStats2=stats

        newStats2.position=action.payload.newPosition

        return newStats2
      } else return stats 
  default:
  return stats;}
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
    case "CREATE_PLAYER":
    const newposition2 = {
      name: action.payload.name,
      id: action.payload.id,
      position: action.payload.position
    }
    return [...positions, newposition2]

    case "CHANGE_POSITION": 
    const newposition3 = positions.map((element) => {
      if (element.id === action.payload.id) {
      element.position=action.payload.newPosition
      return element
    }
      else return element
    })
    return newposition3
    
  default:
  return positions;
  }
};
const enemiesReducer = (mobs = [], action) => {
  return mobs;
};

export default combineReducers({
  inventoryReducer,
  playerReducer,
  equipmentReducer,
  playareaReducer,
  enemiesReducer,
});

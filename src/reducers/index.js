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
        positionX: action.payload.positionX,
        positionY: action.payload.positionY
      }
      return newStats
    case "CHANGE_POSITIONX":
      if (action.payload.id === "player" && action.payload.newPositionX <= 3 && action.payload.newPositionX >=1 ) {
        const newStats2=stats

        newStats2.positionX=action.payload.newPositionX

        return newStats2
      } else return stats 
      case "CHANGE_POSITIONY":
        if (action.payload.id === "player" && action.payload.newPositionY <= 3 && action.payload.newPositionY >=1 ) {
          const newStats3=stats
  
          newStats3.positionY=action.payload.newPositionY
  
          return newStats3
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
      positionX: action.payload.positionX,
      positionY: action.payload.positionY
    }
    return [...positions, newposition]
    case "CREATE_PLAYER":
    const newposition2 = {
      name: action.payload.name,
      id: action.payload.id,
      positionX: action.payload.positionX,
      positionY: action.payload.positionY
    }
    return [...positions, newposition2]

    case "CHANGE_POSITIONX": 
    const newposition3 = positions.map((element) => {
      if (element.id === action.payload.id && action.payload.newPositionX <= 3 && action.payload.newPositionX >=1) {
      element.positionX = action.payload.newPositionX
      return element
    }
      else return element
    })
    return newposition3

    case "CHANGE_POSITIONY":
      const newposition4 = positions.map((element) => {
        if (element.id === action.payload.id && action.payload.newPositionY <= 3 && action.payload.newPositionY >=1) {
        element.positionY= action.payload.newPositionY
        return element
      }
        else return element
      })
      return newposition4
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

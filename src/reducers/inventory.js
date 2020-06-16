import { moveItem } from "../actions/inventory";

export const inventoryReducer = (inventory = [], action) => {
  switch (action.type) {
    case "SPAWN_ITEM":
      return [...inventory, action.payload];
    case "START_DRAG_ITEM":
      console.log(action.payload);
      const filteredList = inventory.filter(
        (item) => item.id !== action.payload
      );

      const itemToMove = inventory.filter((item) => item.id === action.payload);

      moveItem(itemToMove);

      return [...filteredList];
    case "MOVE_ITEM":
      console.log("asdffsdafsd");
      return;
    case "DROP_ITEM":
      return [...inventory, action.payload];
    default:
      return inventory;
  }
};

export const equipmentReducer = (
  equipment = {
    head: null,
    leftArm: null,
    chest: null,
    rightArm: null,
    leftLeg: {
      id: "100",
      name: "Helmet",
      category: "head",
      description: "This is a fine helmet FROM REDUX",
      image: "helmet",
      stats: {
        hp: 10,
        attack: 0,
        defense: 5,
      },
    },
    rightLeg: null,
  },
  action
) => {
  return equipment;
};

export const dragReducer = (dragItem = {}, action) => {
  switch (action.type) {
    case "START_DRAG_ITEM":
      console.log(action.payload);
      console.log("REDUCER: DRAGGING STARTS");
      return action.payload;

    case "DRAG_ITEM":
      console.log("REDUCER: DRAGGING CONTINUES");
      return action.payload;

    case "DROP_DRAG_ITEM":
      console.log("REDUCER: DROPPING ITEM");
      return dragItem;
    default:
      return dragItem;
  }
};

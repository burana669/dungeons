import React from "react";
import { startDrag, drag, drop } from "../actions";

const Item = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    console.log(e);
    console.log(target);

    e.dataTransfer.setData("item", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const drag = () => {};

  const dragEnd = (e) => {
    console.log(e.target);
    e.target.style.display = "block";
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <li className="inventory-slot" key={props.key}>
      <div
        className={`inventory-item ${props.image}`}
        id={props.id}
        onDragStart={dragStart}
        onDrop={drop}
        onDragEnd={dragEnd}
        onDragOver={dragOver}
        draggable={props.draggable}
      >
        {props.name}
      </div>
    </li>
  );
};

export default Item;

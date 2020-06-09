import React from "react";
import { v4 as uuidv4 } from "uuid";

const Slot = ({
  id = uuidv4(),
  className = null,
  children = null,
  name,
  props,
}) => {
  const drop = (e) => {
    e.preventDefault();
    const charSlot = document.getElementById(e.target.id);
    const item = document.getElementById(e.dataTransfer.getData("item"));

    charSlot.appendChild(item);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      className={`slot ${className}`}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {children}
    </div>
  );
};

export default Slot;

import React from "react";

const CharacterSlot = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const charSlot = document.getElementById(e.target.id);
    const item = document.getElementById(e.dataTransfer.getData("item"));

    console.log(charSlot);
    console.log(item);

    charSlot.appendChild(item);
    item.style.display = "block";
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default CharacterSlot;

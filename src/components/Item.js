import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { startDrag, drag, drop } from "../actions";

const Item = (props) => {
  const { id, name, gategory, description, draggable, image } = props;

  const [xAxis, setXAxis] = useState();
  const [yAxis, setYAxis] = useState();
  const [showDescription, setShowDescription] = useState("none");

  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("item", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const drag = () => {};

  const dragEnd = (e) => {
    e.target.style.display = "block";
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const mouseEnter = (e) => {
    setShowDescription("block");
  };

  const mouseMove = (e) => {
    console.log(e.clientX + e.clientY);
  };

  const mouseLeave = (e) => {
    setShowDescription("none");
  };

  return (
    <div
      className={`inventory-item ${image}`}
      id={id}
      onDragStart={dragStart}
      onDrop={drop}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      onMouseEnter={mouseEnter}
      //onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      draggable={draggable}
    >
      {name}
      <div
        className="item-description"
        style={{
          display: showDescription,
          position: "absolute",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default Item;

import React, { useState } from "react";
import ItemDetails from "./ItemDetails";
import { v4 as uuidv4 } from "uuid";
import { startDrag, drag, drop } from "../../actions";

var timeOut;

const Item = (props) => {
  const { id, name, gategory, description, draggable, image, stats } = props;

  const [xAxis, setXAxis] = useState();
  const [yAxis, setYAxis] = useState();
  const [showDescription, setShowDescription] = useState("none");

  const dragStart = (e) => {
    const target = e.target;
    e.stopPropagation();

    e.dataTransfer.setData("item", target.id);
    setShowDescription("none");
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const drag = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    e.target.style.display = "block";
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const mouseEnter = (e) => {
    timeOut = setTimeout(() => {
      setShowDescription("block");
    }, 500);
  };

  const mouseOver = (e) => {};

  const mouseMove = (e) => {
    const thisDiv = document.getElementById(`${id}`);
    const coords = thisDiv.getBoundingClientRect();

    setXAxis(e.pageX - coords.x + 10);
    setYAxis(e.pageY - coords.y + 10);
  };

  const mouseLeave = (e) => {
    clearTimeout(timeOut);
    setShowDescription("none");
  };

  return (
    <div
      className={`inventory-item ${image}`}
      id={id}
      onDragStart={dragStart}
      onDrop={drop}
      onDrag={drag}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      onMouseEnter={mouseEnter}
      onMouseOver={mouseOver}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      draggable={draggable}
    >
      {name}
      <ItemDetails
        id={id}
        description={description}
        stats={stats}
        shown={showDescription}
        coordinates={{ xAxis, yAxis }}
      />
    </div>
  );
};

export default Item;

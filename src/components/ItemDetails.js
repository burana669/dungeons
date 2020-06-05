import React from "react";

const ItemDetails = (props) => {
  return (
    <div
      className="item-description"
      style={{
        display: props.shown,
        top: props.xAxis,
        left: props.yAxis,
      }}
    >
      {props.description}
      <br></br>
      {Object.keys(props.stats)}
    </div>
  );
};

export default ItemDetails;

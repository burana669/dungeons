import React from "react";
import Item from "./Item";

var timeOut;

const ItemDetails = (props) => {
  const renderStats = () => {
    return Object.entries(props.stats).map(([key, value]) => (
      <div className="stats">
        <p>
          {key} : {value}
        </p>
      </div>
    ));
  };

  const x = 0;
  const y = 0;

  return (
    <div
      className="item-description"
      id={`description${props.id}`}
      style={{
        display: props.shown,
        top: `${props.coordinates.yAxis}px`,
        left: `${props.coordinates.xAxis}px`,
      }}
    >
      {props.description}
      <br></br>

      {renderStats()}
    </div>
  );
};

export default ItemDetails;

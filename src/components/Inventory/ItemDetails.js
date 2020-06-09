import React from "react";

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

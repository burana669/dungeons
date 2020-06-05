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
      style={{
        display: props.shown,
        top: props.xAxis,
        left: props.yAxis,
      }}
    >
      {props.description}
      <br></br>
      <br></br>
      {renderStats()}
    </div>
  );
};

export default ItemDetails;

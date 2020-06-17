import React from "react";
import { connect } from "react-redux";
import { drop } from "../../actions/inventory";
import { v4 as uuidv4 } from "uuid";

const Slot = (props) => {
  const handleDrop = (e) => {
    e.preventDefault();
    // const DOMcharSlot = document.getElementById(e.target.id);
    // const DOMitem = document.getElementById(e.dataTransfer.getData("item"));
    // DOMcharSlot.appendChild(DOMitem);

    const charSlotID = e.target.id;
    const item = e.dataTransfer.getData("item");

    props.drop(item, charSlotID);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={`slot ${props.className}`}
      onDrop={handleDrop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

Slot.defaultProps = {
  id: uuidv4(),
  className: null,
  children: null,
};

export default connect(null, { drop })(Slot);

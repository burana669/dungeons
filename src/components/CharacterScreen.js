import React, { useState } from "react";
import { connect, createDispatchHook } from "react-redux";
import { equipItem } from "../actions";
import CharacterSlot from "./CharacterSlot";
import Slot from "./Slot";

const CharacterScreen = ({ props }) => {
  return (
    <div className="equipment-container">
      <Slot id="inventory_head" className="equipment-slot equipment-head" />
      <Slot id="left_arm" className="equipment-slot equipment-left-arm" />
      <Slot id="right_arm" className="equipment-slot equipment-right-arm" />
      <Slot id="torso" className="equipment-slot equipment-torso" />
      <Slot id="left-leg" className="equipment-slot equipment-left-leg" />
      <Slot id="right-leg" className="equipment-slot equipment-right-leg" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equipmentList: state.equipmentReducer,
  };
};

export default connect(mapStateToProps)(CharacterScreen);

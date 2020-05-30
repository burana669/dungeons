import React, { useState } from "react";
import { connect, createDispatchHook } from "react-redux";
import { equipItem } from "../actions";
import CharacterSlot from "./CharacterSlot";

const CharacterScreen = (props) => {
  return (
    <div className="equipment-container">
      <CharacterSlot
        id="inventory_head"
        className="equipment-slot equipment-head"
      />
      <CharacterSlot
        id="left_arm"
        className="equipment-slot equipment-left-arm"
      />
      <CharacterSlot
        id="right_arm"
        className="equipment-slot equipment-right-arm"
      />
      <CharacterSlot id="torso" className="equipment-slot equipment-torso" />
      <CharacterSlot
        id="left-leg"
        className="equipment-slot equipment-left-leg"
      />
      <CharacterSlot
        id="right-leg"
        className="equipment-slot equipment-right-leg"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equipmentList: state.equipmentReducer,
  };
};

export default connect(mapStateToProps)(CharacterScreen);

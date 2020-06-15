import React, { useState } from "react";
import { connect, createDispatchHook } from "react-redux";
import { equipItem } from "../../actions";
import Slot from "./Slot";

const CharacterScreen = ({ props }) => {
  return (
    <div className="equipment-container">
      <div className="character-screen">
        <Slot
          id="inventory_head"
          className="equipment-slot equipment-head"
          name="head"
        />
        <Slot
          id="left_arm"
          className="equipment-slot equipment-left-arm"
          name="left arm"
        />
        <Slot
          id="right_arm"
          className="equipment-slot equipment-right-arm"
          name="right arm"
        />
        <Slot
          id="torso"
          className="equipment-slot equipment-torso"
          name="torso"
        />
        <Slot
          id="left-leg"
          className="equipment-slot equipment-left-leg"
          name="left leg"
        />
        <Slot
          id="right-leg"
          className="equipment-slot equipment-right-leg"
          name="right leg"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equipmentList: state.equipmentReducer,
  };
};

export default connect(mapStateToProps)(CharacterScreen);

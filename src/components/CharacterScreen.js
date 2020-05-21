import React, { useState } from "react";
import { connect } from "react-redux";
import { equipItem } from "../actions";

const CharacterScreen = (props) => {
  return (
    <div className="equipment-container">
      <div className="equipment-slot equipment-head">HEAD</div>
      <div className="equipment-slot equipment-arm-left">LEFT ARM</div>
      <div className="equipment-slot equipment-arm-right">RIGHT ARM</div>
      <div className="equipment-slot equipment-torso">TORSO</div>
      <div className="equipment-slot equipment-leg-left">LEFT LEG</div>
      <div className="equipment-slot equipment-leg-right">RIGHT LEG</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equipmentList: state.equipmentReducer,
  };
};

export default connect(mapStateToProps)(CharacterScreen);

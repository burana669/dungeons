import React from "react";
import { connect } from "react-redux";
import Slot from "./Slot";
import Item from "./Item";




const CharacterScreen = (props) => {

  const mapCategory = (category) => {
    let returnItem = {}
    console.log(props)
    props.equipment.map(element => { if (element.category === category){
      returnItem = element
    }})
    return returnItem
  }
  

  const head = mapCategory("head")
  const leftArm = mapCategory("leftArm")
  const rightArm = mapCategory("rightArm")
  const chest = mapCategory("chest")
  const leftLeg = mapCategory("leftLeg")
  const rightLeg = mapCategory("rightLeg")

  return (
    <div className="character-screen">
      <Slot id="inventory_head" className="equipment-slot equipment-head">
        {head ? <Item item={head} /> : null}
      </Slot>
      <Slot id="left_arm" className="equipment-slot equipment-left-arm">
        {leftArm ? <Item item={leftArm} /> : null}
      </Slot>
      <Slot id="right_arm" className="equipment-slot equipment-right-arm">
        {rightArm ? <Item item={rightArm} /> : null}
      </Slot>
      <Slot id="chest" className="equipment-slot equipment-chest">
        {chest ? <Item item={chest} /> : null}
      </Slot>
      <Slot id="left-leg" className="equipment-slot equipment-left-leg">
        {leftLeg ? <Item item={leftLeg} /> : null}
      </Slot>
      <Slot id="right-leg" className="equipment-slot equipment-right-leg">
        {rightLeg ? <Item item={rightLeg} /> : null}
      </Slot>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equipment: state.equipmentReducer,
  };
};

export default connect(mapStateToProps)(CharacterScreen);

import React from "react"
import {connect} from "react-redux"

import CharacterScreen from "./CharacterScreen";
import InventoryScreen from "./InventoryScreen";
import PlayArea from "./PlayArea";

const Screen = (props) => {

    let returnStuff = []
    if(props.inventory){
        returnStuff = [...returnStuff, <InventoryScreen></InventoryScreen>]

    }
    if(props.playArea) {
        returnStuff = [...returnStuff,<PlayArea></PlayArea>]}
    if(props.characterScreen) {
        returnStuff = [...returnStuff,<CharacterScreen></CharacterScreen>]
    }
    return returnStuff  
}

const mapStateToProps = (state) => {
    return {
        inventory: state.screenReducer.inventory,
        playArea: state.screenReducer.playArea,
        characterScreen: state.screenReducer.characterScreen
        
    }

}



export default connect (mapStateToProps)(Screen) 
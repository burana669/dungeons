import React from 'react'
import {connect} from "react-redux"
import {createMob, createPlayer, changeView} from "../actions"

const Creator = (props) => {

const newmob = {
    name: "mölli",
    damage: 4,
    health: 10,
    positionX: 3,
    positionY: 1
}

const newmob2 = {
    name: "lisko",
    damage: 4,
    health: 10,
    positionX: 1,
    positionY: 3
}

const player = {
    name: "MATTI",
    damage: 1,
    health: 100,
    positionX: 2,
    positionY: 3
}

const newView = {
    inventory: true,
    playArea: true,
    characterScreen: true

}

props.createMob(newmob)
props.createMob(newmob2)
props.createPlayer(player)
props.changeView(newView)

return null


}

export default connect(null, {createMob, createPlayer, changeView})(Creator)
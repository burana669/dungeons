import React from 'react'
import {connect} from "react-redux"
import {createMob, createPlayer} from "../actions"

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

props.createMob(newmob)
props.createMob(newmob2)
props.createPlayer(player)

return null


}

export default connect(null, {createMob, createPlayer})(Creator)
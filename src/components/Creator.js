import React from 'react'
import {connect} from "react-redux"
import {createMob, createPlayer} from "../actions"

const Creator = (props) => {

const newmob = {
    name: "mölli",
    damage: 4,
    health: 10,
    position: 13
}

const newmob2 = {
    name: "lisko",
    damage: 4,
    health: 10,
    position: 31
}

const player = {
    name: "MATTI",
    damage: 1,
    health: 100,
    position: 32
}

props.createMob(newmob)
props.createMob(newmob2)
props.createPlayer(player)

return null


}

export default connect(null, {createMob, createPlayer})(Creator)
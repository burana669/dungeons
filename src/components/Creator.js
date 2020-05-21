import React from 'react'
import {connect} from "react-redux"
import {createMob} from "../actions"

const Creator = (props) => {

const newmob = {
    name: "mölli",
    damage: 4,
    health: 10,
    position: "b3"
}

const newmob2 = {
    name: "lisko",
    damage: 4,
    health: 10,
    position: "c1"
}

props.createMob(newmob)
props.createMob(newmob2)

return null


}

export default connect(null, {createMob})(Creator)
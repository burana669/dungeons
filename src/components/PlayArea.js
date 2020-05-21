import React from "react"
import {connect} from "react-redux"


const Playarea = (props) => {

    

    

    const areaPositions = props.positions.map((element) => {
        switch (element.position) {
            case "a1":
        return <div className="playarea-a1">{element.name}</div>
            case "a2":
        return <div className="playarea-a2">{element.name}</div>
            case "a3":
        return <div className="playarea-a3">{element.name}</div>
            case "b1":
        return <div className="playarea-b1">{element.name}</div>
            case "b2":
        return <div className="playarea-b2">{element.name}</div>
            case "b3":
        return <div className="playarea-b3">{element.name}</div>
            case "c1":
        return <div className="playarea-c1">{element.name}</div>
            case "c2":
        return <div className="playarea-c2">{element.name}</div>
            case "c3":
        return <div className="playarea-c3">{element.name}</div>
        
       default:
           return null 
    }
        

    })

    
    return (
    <div className="playarea-container">{areaPositions}</div>
    )

}

const mapStateToProps = (state) => {
    return {
        positions: state.playareaReducer
    }
}

export default connect(mapStateToProps)(Playarea)

           /*  <div className="playarea-a1">a1</div>
            <div className="playarea-a2">a2</div>
            <div className="playarea-a3">a3</div>
            <div className="playarea-b1">b1</div>
            <div className="playarea-b2">b2</div>
            <div className="playarea-b3">b3</div>
            <div className="playarea-c1">c1</div>
            <div className="playarea-c2">c2</div>
            <div className="playarea-c3">c3</div> */
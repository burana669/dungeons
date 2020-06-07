import React, {useEffect} from "react"
import {connect} from "react-redux"
import {rePositionX, rePositionY} from "../actions"

const HandleKeyPress = (props) => {

    useEffect(() => {
        const handleKey = (e) => {
            
            


            if(e.key === "ArrowRight") {
                
                props.rePositionX((props.positionX + 1), "player")
            }
            else if (e.key === "ArrowLeft") {
                props.rePositionX((props.positionX - 1), "player")
            }
            else if (e.key === "ArrowUp") {
                props.rePositionY((props.positionY - 1), "player")
            }
            else if (e.key === "ArrowDown") {
                
                
                props.rePositionY((props.positionY + 1), "player")
            }
            
        }
        window.addEventListener('keydown', handleKey)
        

        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    })
    
   

    return  <div></div>
    
    
}

const mapStateToProps = (state) => {
    return {
        positionY: state.playerReducer.positionY,
        positionX: state.playerReducer.positionX
    }
}

export default connect(mapStateToProps, {rePositionX, rePositionY})(HandleKeyPress)

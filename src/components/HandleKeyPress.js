import React, {useEffect} from "react"
import {connect} from "react-redux"
import {rePosition} from "../actions"

const HandleKeyPress = (props) => {

    useEffect(() => {
        const handleKey = (e) => {
            console.log(props.position)
            console.log(e)


            if(e.key === "ArrowRight") {
                
                props.rePosition((props.position + 1), "player")
            }
            else if (e.key === "ArrowLeft") {
                props.rePosition((props.position - 1), "player")
            }
            else if (e.key === "ArrowUp") {
                props.rePosition((props.position - 10), "player")
            }
            else if (e.key === "ArrowDown") {
                
                
                props.rePosition((props.position + 10), "player")
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
        position: state.playerReducer.position
    }
}

export default connect(mapStateToProps, {rePosition})(HandleKeyPress)

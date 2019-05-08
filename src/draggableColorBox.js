import React from'react'
import {withStyles} from "@material-ui/styles"

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin:  "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        
           
        }
    }



function DraggableColorBox(props){
    return(
        <div 
            style={{backgroundColor: props.color}} 
            className={props.classes.root}>
                {props.color}
        </div>
    )

}

export default withStyles(styles)(DraggableColorBox)
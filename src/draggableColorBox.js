import React from'react'
import {withStyles} from "@material-ui/styles"
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin:  "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover svg": {
            color:"white",
            transform: "scale(1.5)"
        }
                  
        },

    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom:"0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    deleteIcon :{
        position: "absolute",
        color: "black",
        right: "0px",
        bottom:"5px",
        transition: "all 0.3s ease-in-out"
    }
}


function DraggableColorBox(props){

    const {classes, name, handleClick, color} = props

    return(
        <div 
            style={{backgroundColor: color}} 
            className={classes.root}
        >
        <span className={classes.boxContent}>

            
            {name}
            
        </span>
        <DeleteIcon 
            className={classes.deleteIcon}
            onClick={handleClick}/>
        </div>
    )

}

export default withStyles(styles)(DraggableColorBox)
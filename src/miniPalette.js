import React from 'react';
import {withStyles} from "@material-ui/styles"

const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal"
    },
    secondary: {
        backgroundColor: "pink",
        "& h1": {
            color: "white",
            "& span": {
                color: "yellow"
            }
        }
        
    }
}

function MiniPalette(props){

    const {classes} = props
    console.group(classes);

    return (
        <div className={classes.main}>
            <h1>This is my MiniPalette</h1>
            <div className={classes.secondary}>
                <h1>this is in secondary <span>This is in a span</span></h1>
            </div>


        </div>
    )
}

export default withStyles(styles)(MiniPalette)
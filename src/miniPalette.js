import React from 'react';
import {withStyles} from "@material-ui/styles"
import styles from './styles/miniPaletteStyles'



function MiniPalette(props){

    const {classes, paletteName, emoji, colors} = props
    
    const miniColorBox = colors.map( color =>(
        <div 
        className={classes.miniColor} 
        style={{backgroundColor: color.color}}
        key={color.name}>
        </div>
    )

    )
    return (
        <div className={classes.root} onClick={props.handleClick}>
            
            <div className={classes.colors} >
                {miniColorBox}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>


        </div>
    )
}

export default withStyles(styles)(MiniPalette)
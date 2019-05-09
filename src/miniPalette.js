import React , {Component}from 'react';
import {withStyles} from "@material-ui/styles"
import styles from './styles/miniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'



class MiniPalette extends Component {

    constructor(props){
        super(props);
        this.state= {

        }
        this.deletePalette = this.deletePalette.bind(this)
    }

    deletePalette(e){
        e.stopPropagation()
        this.props.deletePalette(this.props.id)
        console.log("a")
    }

    render(){

        
        const {classes, paletteName, emoji, colors, handleClick} = this.props
        
        const miniColorBox = colors.map( color =>(
            <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}>
                
            </div>
        ));

        return (
            <div className={classes.root} onClick={handleClick}>
                
                    <DeleteIcon 
                        className={classes.deleteIcon} 
                        style={{transition: "all 0.3s ease-in-out"}}
                        onClick={this.deletePalette}
                    />
                
                
                
                    <div className={classes.colors} >
                    
                        {miniColorBox}
                    </div>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
                

            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette)
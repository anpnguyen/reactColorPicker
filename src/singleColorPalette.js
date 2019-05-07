import React, {Component } from 'react';
import ColorBox from './colorBox'
import NavBar from './navBar'
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"
import styles from './styles/singleColorPaletteStyles'




    

class SingleColorPalette extends Component{

    constructor(props){
        super(props);
        
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        console.log(this._shades)
        this.state= {
            format: "hex"
            
        }
        this.changeFormat = this.changeFormat.bind(this)
    
    }


    gatherShades(palette, colorToFindBy){
        let shades = [];
        let allColors = palette.colors
        for(let i in allColors){
            shades = shades.concat(
               allColors[i].filter(color=> color.id === colorToFindBy)
            );
        }
        return shades.splice(1);
    }

    changeFormat(value){
        this.setState({format : value})

    }

   
 
    render(){
        const {format} = this.state
        const {paletteName, emoji, id} = this.props.palette
        const {classes} = this.props
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key= {color.name}
                name= {color.name}
                background= {color[format]}
                showFullPalette = {false}
                />
        ))
        return(

            <div className={classes.Palette}>   
                <NavBar changeFormat={this.changeFormat} showingAllColors = {false}/>
                
                <div className={classes.PaletteColors}>
                 {colorBoxes}
                  
                    <div className={classes.goBackBox}>
                        <Link 
                        to= {`/palette/${id}`}> Go Back </Link>
                    </div>
                 
                </div>
                
               
               

                
                <div>
                    <PaletteFooter paletteName={paletteName} emoji={emoji}/>
                </div>

             
            </div>
            
            
        )
    }

}


export default withStyles(styles)( SingleColorPalette)
import React, {Component } from 'react';
import ColorBox from './colorBox'
import NavBar from './navBar'
import PaletteFooter from './PaletteFooter'


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
        const {paletteName, emoji} = this.props.palette
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key= {color.name}
                name= {color.name}
                background= {color[format]}
                showLink = {false}
                />
        ))
        return(

            <div className="Palette">   
                <NavBar changeFormat={this.changeFormat} showingAllColors = {false}/>
                <h1>single color palette component</h1>
                <div className="Palette-colors">
                 {colorBoxes}
                </div>
               

                
                <div>
                    <PaletteFooter paletteName={paletteName} emoji={emoji}/>
                </div>

             
            </div>
            
            
        )
    }

}


export default SingleColorPalette
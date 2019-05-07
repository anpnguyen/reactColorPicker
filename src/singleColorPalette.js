import React, {Component } from 'react';
import ColorBox from './colorBox'


class SingleColorPalette extends Component{

    constructor(props){
        super(props);
        
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        console.log(this._shades)
        this.state= {
            
        }
    
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

   
 
    render(){
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key= {color.name}
                name= {color.name}
                background= {color.hex}
                showLink = {false}
                />
        ))
        return(

            <div className="Palette">   
                <h1>single color palette component</h1>
                <div className="Palette-colors">
                 {colorBoxes}
                </div>
               

                
                

             
            </div>
            
            
        )
    }

}


export default SingleColorPalette
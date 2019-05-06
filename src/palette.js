import React, {Component } from 'react';

import ColorBox from './colorBox'
import {generatePalette} from './colorHelpers'

import './palette.css'

class Palette extends Component{


    render(){
        let ColorBoxes = this.props.colors.map( singleColor => 
            <ColorBox background={singleColor.color} name={singleColor.name}/>
        )


        return(
            <div className="Palette">
                <div className="Palette-colors">
                     
                    {ColorBoxes}   
                </div>
            </div>
            
        )
    }

}


export default Palette
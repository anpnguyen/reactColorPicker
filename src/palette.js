import React, {Component } from 'react';
import ColorBox from './colorBox'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './palette.css'

class Palette extends Component{

    constructor(props){
        super(props);
        this.state= {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level){
        this.setState({level})
        console.log(level)
    }

    render(){
        const {colors} = this.props.palette;
        const {level} = this.state;
        
        let ColorBoxes = colors[level].map( singleColor => 
            <ColorBox background={singleColor.hex} name={singleColor.name}/>
        )


        return(
            <div className="Palette">
                <Slider 
                    defaultValue= {level} 
                    min={100} 
                    max={900} 
                    onAfterChange= {this.changeLevel}
                    step = {100}
                    />
                <div className="Palette-colors">
                     
                    {ColorBoxes}   
                </div>
            </div>
            
        )
    }

}


export default Palette
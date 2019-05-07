import React, {Component } from 'react';
import ColorBox from './colorBox'
import NavBar from './navBar'

import './palette.css'

class Palette extends Component{

    constructor(props){
        super(props);
        this.state= {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level){
        this.setState({level})
        console.log(level)
    }
    
    changeFormat(value){
        this.setState({format : value})

    }

    render(){
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        
        
        let ColorBoxes = colors[level].map( singleColor => 
            <ColorBox 
            background={singleColor[format]} 
            name={singleColor.name} 
            key={singleColor.id} 
            colorId={singleColor.id}
            paletteId={id}
            showLink = {true}
            />
        )


        return(
            <div className="Palette">
                <NavBar 
                level = {level} 
                changeLevel = {this.changeLevel}
                changeFormat = {this.changeFormat}/>
                
                <div className="Palette-colors">
                    {ColorBoxes}   
                </div>
            
            
                <footer className="Palette-footer">
                    <span>{paletteName}</span>
                    <span className="emoji">   {emoji}</span>
                </footer>
            
            
            </div>
            
        )
    }

}


export default Palette
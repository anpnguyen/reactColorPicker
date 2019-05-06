import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navBar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



class NavBar extends Component{

    constructor(props){
        super(props);
        this.state= {
            format: 'hex'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({format: e.target.value})
        this.props.changeFormat(e.target.value)
    }

    

    render(){
        const {level, changeLevel} = this.props
        const {format} = this.state
        
        
        return(
            <header className="NavBar"> 
            
                <div className="logo">
                    <a >LOGO</a>
                </div>
                 
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue= {level} 
                            min={100} 
                            max={900} 
                            onAfterChange= {changeLevel}
                            step = {100}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGB - rgba(255,255,255,1.0)</MenuItem>
                        
                    </Select>

                </div>


                
            </header>

        )
    }



}

export default NavBar
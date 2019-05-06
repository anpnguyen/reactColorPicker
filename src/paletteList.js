import React, {Component } from 'react';
import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'


class PaletteList extends Component{

    constructor(props){
        super(props);
        this.state= {
        
        }
    
    }

 
    render(){
        const {palettes} = this.props


        return(

            <div>   
                <MiniPalette/>

                {palettes.map( palette => (
                    <div>
                        <MiniPalette {...palette}/>
                        </div>
                    
                ))}
            </div>
            
            
        )
    }

}


export default PaletteList
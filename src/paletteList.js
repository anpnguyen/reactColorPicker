import React, {Component } from 'react';
import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'
import {withStyles} from "@material-ui/styles"



const styles = {
    root: {
        backgroundColor: "blue",
        height: "100%",
        display: "flex",
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection:"column",
        flexWrap: "wrap",
        border: "1px solid white"
    },
    nav: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        color: "white"

    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)"
    }

}



class PaletteList extends Component{

    constructor(props){
        super(props);
        this.state= {
        
        }
    
    }

 
    render(){
        const {palettes, classes} = this.props
        


        return(

            <div className={classes.root}>   
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>ReactColors</h1>
                    </div>

                    <div className={classes.palettes}>

                       {palettes.map( palette => (
                         <div>
                            <MiniPalette {...palette}/>
                         </div>
                        ))}
                    </div>

                </div>

                
                

             
            </div>
            
            
        )
    }

}


export default withStyles(styles)( PaletteList)
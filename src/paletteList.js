import React, {Component } from 'react';
// import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'
import {withStyles} from "@material-ui/styles"
import {Link} from 'react-router-dom'
import styles from './styles/paletteListStyles'




class PaletteList extends Component{

    constructor(props){
        super(props);
        this.state= {
        
        }
    
    }

    gotoPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
 
    render(){
        const {palettes, classes} = this.props
        


        return(

            <div className={classes.root}>   
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>ReactColors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </div>

                    <div className={classes.palettes}>

                       {palettes.map( palette => (
                         <div>
                             
                            <MiniPalette 
                                {...palette}
                                handleClick={()=> this.gotoPalette(palette.id)}/>
                            
                         </div>
                        ))}
                    </div>

                </div>

                
                

             
            </div>
            
            
        )
    }

}


export default withStyles(styles)( PaletteList)
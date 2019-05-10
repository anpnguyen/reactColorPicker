import React, {Component } from 'react';
// import {Link} from 'react-router-dom'
import MiniPalette from './miniPalette'
import {withStyles} from "@material-ui/styles"
import {Link} from 'react-router-dom'
import styles from './styles/paletteListStyles'
import {CSSTransition, TransitionGroup} from 'react-transition-group'




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
        const {palettes, classes, deletePalette} = this.props
        


        return(

            <div className={classes.root}>   
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>ReactColors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </div>

                    

                    <TransitionGroup className={classes.palettes}>
                     
                       {palettes.map( palette => (
                         
                             
                            <CSSTransition classNames='fade' timeout= {500} key={palette.id}>
                                <MiniPalette 
                                    {...palette}
                                    handleClick={()=> this.gotoPalette(palette.id)}
                                    deletePalette = {deletePalette}
                                    key = {palette.id}
                                    id = {palette.id}/>
                            </CSSTransition>
                            
                        
                        ))}
                     
                    </TransitionGroup>
                    
                </div>

                
                

             
            </div>
            
            
        )
    }

}


export default withStyles(styles)( PaletteList)
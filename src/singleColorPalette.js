import React, {Component } from 'react';
import ColorBox from './colorBox'
import NavBar from './navBar'
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"

const styles = {

    Palette: {
        height: '95vh',
        display:'flex',
        flexDirection: 'column'
    },
    
    PaletteColors: {
        height: "90%"
    },
    
    goBackBox: {
        width: "20%",
        background: "black",
        height: "50%" ,
        margin:  "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        opacity: "1",
            "& a": {
                width: '100px',
                height:'30px',
                position: 'absolute',
                display: 'inline-block',
                top:'50%',
                left: '50%',
                marginLeft: '-50px',
                marginTop: '-15px',
                textAlign: 'center',
                outline: 'none',
                background: 'rgba(255,255,255,0.3)',
                fontSize: '1rem',
                lineHeight: '30px',
                textTransform: 'uppercase',
                border: 'none',
                textDecoration: 'none',
                color: "white"

            }

        }
    
    }


    

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
        const {paletteName, emoji, id} = this.props.palette
        const {classes} = this.props
        
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key= {color.name}
                name= {color.name}
                background= {color[format]}
                showFullPalette = {false}
                />
        ))
        return(

            <div className={classes.Palette}>   
                <NavBar changeFormat={this.changeFormat} showingAllColors = {false}/>
                
                <div className={classes.PaletteColors}>
                 {colorBoxes}
                  
                    <div className={classes.goBackBox}>
                        <Link 
                        to= {`/palette/${id}`}> Go Back </Link>
                    </div>
                 
                </div>
                
               
               

                
                <div>
                    <PaletteFooter paletteName={paletteName} emoji={emoji}/>
                </div>

             
            </div>
            
            
        )
    }

}


export default withStyles(styles)( SingleColorPalette)
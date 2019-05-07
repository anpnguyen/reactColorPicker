import React, {Component } from 'react';
// import './colorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'
import {withStyles} from "@material-ui/styles"
import styles from "./styles/colorBoxStyles"



class ColorBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }


    changeCopyState(){
        this.setState( {copied:true}, () => {
            setTimeout(() => this.setState({copied:false}), 1500)
        })
    }
    
    render(){
        const {name, background, paletteId, colorId, id, classes, showFullPalette} = this.props
        const copied = this.state.copied
        const isDark = (chroma(background).luminance() <= 0.5)
        


        return(
            <CopyToClipboard text = {background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBox} style={{background}}>
                    <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{background}} />
                    <div className={`${classes.copyMsg} ${copied && classes.showMsg} ${classes.CopyText}`}>
                        <h1 >Copied!</h1>
                        <p >{background}</p>
                    </div>
                    
                    <div >
                        <div className={classes.boxContent}>
                            <span className={classes.colorName} >{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>

                    {showFullPalette && (
                    <Link exact to={`/palette/${paletteId}/${colorId}`} onClick={(e => e.stopPropagation())}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
            
        )
    }

}


export default withStyles(styles)(ColorBox)
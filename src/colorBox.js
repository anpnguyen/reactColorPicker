import React, {Component } from 'react';
import './colorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'

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
        const {name, background, paletteId, colorId, id} = this.props
        const copied = this.state.copied
        const isDark = (chroma(background).luminance() <= 0.5)
        


        return(
            <CopyToClipboard text = {background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{background}}>
                    <div className={`copy-overlay ${copied && "show"}`} style={{background}} />
                    <div className={`copy-msg ${copied && "show"} ${isDark? "light-text": "dark-text"} `}>
                        <h1>Copied!</h1>
                        <p>{name}</p>
                        <p>{background}</p>
                    </div>
                    
                    <div className="copy-container">
                        <div className="box-content">
                            <span className= {`${isDark? "light-text": "dark-text"}`}>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>

                    {this.props.showLink && (
                    <Link exact to={`/palette/${paletteId}/${colorId}`} onClick={(e => e.stopPropagation())}>
                        <span className={`see-more ${isDark? "light-text": "dark-text"}`}>More</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
            
        )
    }

}


export default ColorBox
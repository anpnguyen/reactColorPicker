import React, {Component } from 'react';
import './colorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

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
        const {name, background} = this.props
        const copied = this.state.copied


        return(
            <CopyToClipboard text = {background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{background}}>
                    <div className={`copy-overlay ${copied && "show"}`} style={{background}} />
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{this.props.name}</p>
                    </div>
                    
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more">More</span>
                    
                </div>
            </CopyToClipboard>
            
        )
    }

}


export default ColorBox
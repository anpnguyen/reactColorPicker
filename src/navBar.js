import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import './navBar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/styles"
import styles from './styles/navBarStyles'





class NavBar extends Component{

    constructor(props){
        super(props);
        this.state= {
            format: 'hex',
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(e){
        this.setState({format: e.target.value, open: true})
        this.props.changeFormat(e.target.value)
    }

    closeSnackbar(){
        this.setState({open: false})
    }
    

    render(){
        const {level, changeLevel, showingAllColors, classes} = this.props
        const {format} = this.state
        
        
        return(
            <header className={classes.NavBar}> 
            
                <div className={classes.logo}>
                    <Link exact='true' to="/">ReactColorPicker</Link>
                </div>
                 
                {showingAllColors && ( 
                <div >
                    <span>Level: {level}</span>
                    <div className= {classes.slider}>
                        <Slider 
                            defaultValue= {level} 
                            min={100} 
                            max={900} 
                            onAfterChange= {changeLevel}
                            step = {100}
                        />
                    </div>
                </div>
                )}
                <div className={classes.selectContainer}>
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value="hex">Hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGB - rgba(255,255,255,1.0)</MenuItem>
                        
                    </Select>

                </div>

                <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal:"left"}}
                open={this.state.open}
                autoHideDuration= {3000}
                message={<span>Format Changed to {format.toUpperCase()}!</span>} 
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                action={[
                    <IconButton 
                        color="white" 
                        aria-label= "close"
                        key =" close"
                        onClick= {this.closeSnackbar}>
                        <CloseIcon />
                    </IconButton>]}
                onClose={this.closeSnackbar}

                />
                
            </header>

        )
    }



}

export default withStyles(styles)(NavBar)
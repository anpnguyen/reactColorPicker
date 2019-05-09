import React, {Component } from 'react';


// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';

// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';

// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {ChromePicker} from 'react-color'
import Button from '@material-ui/core/Button';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import styles from './styles/colorPickerFormStyles'

// import DraggableColorList from './DraggableColorList'
// import arrayMove from 'array-move';
// import PaletteFormNav from './PaletteFormNav'




class ColorPickerForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            newColorName: "",
            currentColor: {}
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleColorChange = this.handleColorChange.bind(this)
        this.handleAddNewColor = this.handleAddNewColor.bind(this)
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
    }

    handleChange(evt){
    
        this.setState({ [evt.target.name]: evt.target.value})
        
      }

    // handleColorChange(color){
    //   this.setState({currentColor: color.hex})
      
    // }


    handleAddNewColor(){
      let newColorObject= {color: this.state.currentColor, name: this.state.newColorName}
      console.log(newColorObject)
      this.props.addNewColor(newColorObject)
      this.setState({newColorName: ""})
    }


    updateCurrentColor(newColor){
      this.setState({currentColor: newColor.hex})
    }
  

    componentDidMount() {
    
      ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
        let obj = this.props.colors.find( object => object.name.toLowerCase() === value.toLowerCase())
        console.log(value)
        return (!obj?  true:  false)
      })
  
      ValidatorForm.addValidationRule('isColorUnique', (value) => {
        let obj = this.props.colors.find( object => object.color.toLowerCase() === this.state.currentColor.toLowerCase())
        return (!obj?  true:  false)
       
      })
  
  
  
    }







    render(){
        const {paletteIsFull, classes} = this.props
        const {currentColor, newColorName} = this.state
        
        return(
            <div>
            <ChromePicker 
              className={classes.picker}
              color={currentColor} 
              onChangeComplete={this.updateCurrentColor}/>
            

            <ValidatorForm onSubmit= {this.handleAddNewColor}>
              <Button 
                className={classes.addColor}
                variant="contained" 
                color= "default" 
                style={{background: currentColor}}
                
                type= "submit"
                disabled= {paletteIsFull}
                > {paletteIsFull? "palette full": "add Color"}
              </Button>
              <TextValidator 
                className={classes.colorNameInput}
                name= "newColorName"
                variant = "filled"
                margin = "normal"
                placeholder = "Add color name"
                value = {newColorName}
                onChange = {this.handleChange}
                validators={["required", "isColorNameUnique", 'isColorUnique' ]}
                errorMessages={['this field is required', "Please add unique color name", "choose new color" ]}
                 />
            </ValidatorForm>

            </div>
        )
    }


}

export default withStyles(styles)(ColorPickerForm)
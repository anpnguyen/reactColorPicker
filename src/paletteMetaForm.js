import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import {ChromePicker} from 'react-color'

// import DraggableColorBox from './draggableColorBox'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import DraggableColorList from './DraggableColorList'
// import arrayMove from 'array-move';
import {Link} from 'react-router-dom'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'


class PaletteMetaForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: true,
            newPaletteName: ""
        };
    this.handleChange = this.handleChange.bind(this)
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(evt){
       
    this.setState({ [evt.target.name]: evt.target.value})
    
  }


  componentDidMount() {

    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      let obj = this.props.palette.find( palette => palette.paletteName.toLowerCase() === this.state.newPaletteName.toLowerCase())
      return (!obj?  true:  false)
    })

  }

  render() {
        const {palette, hideForm} = this.props
        const {newPaletteName} = this.state
    return (
     
        <Dialog
          open={this.state.open}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
            
            <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
          
            <ValidatorForm 
                onSubmit= {() => this.props.handleSubmit(newPaletteName)}>
            <DialogContent>
                <DialogContentText>
                Please choose a Palette name
                </DialogContentText>
                    
                    
                
                        
                    <TextValidator 
                        name = "newPaletteName"
                        value = {newPaletteName}
                        onChange = {this.handleChange}
                        placeholder = "This is me"
                        validators={["required" ,"isPaletteNameUnique" ]}
                        errorMessages={['this field is required' , "unique plate" ]}
                        fullWidth
                        margin ="normal"
                    />
                    
            </DialogContent>
          

          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                >Save Palette
            </Button>
          </DialogActions>

          </ValidatorForm>

          <Picker/>
          
        </Dialog>
      
    );
  }
}

export default PaletteMetaForm
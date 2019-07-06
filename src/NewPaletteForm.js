import React, {Component } from 'react';
// import {Link} from 'react-router-dom'

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {ChromePicker} from 'react-color'
import Button from '@material-ui/core/Button';
// import DraggableColorBox from './draggableColorBox'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import { blue } from '@material-ui/core/colors';
import DraggableColorList from './DraggableColorList'
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './colorPickerForm'
import styles from './styles/newPalleteFormStyles'
import seedColors from './seedColors'

const drawerWidth = 400;



class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors : 20
  }

  constructor(props){
    super(props);
      this.state = {
        open: true,
        currentColor: "teal",
        colors: seedColors[0].colors,
        newColorName: "",
        newPaletteName: ""
    };
  // this.updateCurrentColor = this.updateCurrentColor.bind(this)
  this.addNewColor = this.addNewColor.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.deleteColor = this.deleteColor.bind(this)
  this.clearColors = this.clearColors.bind(this)
  this.addRandomColor = this.addRandomColor.bind(this)
  }




  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }))
  };
  


// ==========================
// handle Change on forms
// ==========================

  handleChange(evt){
    
    this.setState({ [evt.target.name]: evt.target.value})
    
  }
// ==========================
  // ColorPicker
// ==========================
  addNewColor(newColorObject){
    this.setState({colors: [...this.state.colors, newColorObject], newColorName: ""})
  }

  addRandomColor(){
    const allColors = this.props.palette.map(p => p.colors).flat()
    let rand = Math.floor(Math.random() * allColors.length)
    let randomColor = allColors[rand]
    // console.log(randomColor)
    this.setState({colors: [...this.state.colors, randomColor]})
  }

  clearColors(){
    this.setState({colors: []})
  }



  handleSubmit(newPalette){
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-")
    newPalette.colors = this.state.colors
        
    this.props.savePalette(newPalette)
    this.props.history.push("/")
  }

  deleteColor(colorName){
    this.setState(
      {colors: this.state.colors.filter( color => color.name !== colorName)}
    )

  }
// ==========================
// Drawer
// ==========================

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

 
  
 



  render() {
    const { classes, theme, palette } = this.props;
    const { open , currentColor, colors} = this.state;
    const paletteIsFull = this.state.colors.length >= this.props.maxColors

    return (
      <div className={classes.root}>
        
        <PaletteFormNav 
          // classes={classes} 
          open={open} 
          handleSubmit={this.handleSubmit} 
          palette={palette}
          handleDrawerOpen = {this.handleDrawerOpen}
        />

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        
        
        <div className={classes.drawerHeader}>
          {/* This is the header of the Menu */}
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon /> 
          </IconButton>
        </div>

        <Divider />
        {/* This is the top part of the menu */}
        <Divider />
        

        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>Design Your Palette</Typography>

          <div className={classes.buttons}>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={this.clearColors}
              className= {classes.button}
            > Clear Palette 
            </Button>

            <Button 
              variant="contained" 
              color="primary" 
              onClick={this.addRandomColor} 
              className= {classes.button}
              disabled= {paletteIsFull}
            > Random Color 
            </Button>

          </div>



          <ColorPickerForm 
            paletteIsFull = {paletteIsFull}
            currentColor = {currentColor}
            addNewColor = {this.addNewColor}
            updateCurrentColor= {this.updateCurrentColor}
            colors = {colors}
          />

        </div>
          
        </Drawer>
          <main
            className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
          >
            <div className={classes.drawerHeader} />

              <DraggableColorList 
                colors={this.state.colors}
                deleteColor = {this.deleteColor}
                axis = "xy"
                onSortEnd = {this.onSortEnd}
                distance = {20}
              />
            
          
          
          </main>
      </div>
    );
  }
}

// PersistentDrawerLeft.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };





  export default withStyles(styles, { withTheme: true })(NewPaletteForm)
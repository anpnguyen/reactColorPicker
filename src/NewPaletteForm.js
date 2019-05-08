import React, {Component } from 'react';
// import {Link} from 'react-router-dom'

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {ChromePicker} from 'react-color'
import Button from '@material-ui/core/Button';
import DraggableColorBox from './draggableColorBox'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import { blue } from '@material-ui/core/colors';


const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends Component {
  constructor(props){
    super(props);
      this.state = {
        open: true,
        currentColor: "teal",
        colors: [{color:"#108585", name:"blue"},{color:"green", name:"green"}],
        newName: ""
    };
  this.updateCurrentColor = this.updateCurrentColor.bind(this)
  this.addNewColor = this.addNewColor.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

     
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      let obj = this.state.colors.find( object => object.name === value)
      return (!obj?  true:  false)
    })

    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      let obj = this.state.colors.find( object => object.color === this.state.currentColor)
      return (!obj?  true:  false)
    })

  }




  handleChange(evt){
    
   
    this.setState({ newName: evt.target.value})
    // console.log(this.state.newName)
  }

  addNewColor(){
    const newColor = {color: this.state.currentColor, name: this.state.newName }

    this.setState({colors: [...this.state.colors, newColor], newName: ""})
  }


  updateCurrentColor(newColor){
    console.log(newColor)
    this.setState({currentColor: newColor.hex})
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

 handleSubmit(){
    let newPalette = "new palette name"
    const newPallete = {
      paletteName: newPalette,
      id: newPalette.toLowerCase().replace(/ /g, "-"),
      emoji: "",
      colors: this.state.colors
    }
    this.props.savePalette(newPallete)
    this.props.history.push("/")
  }


 



  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick= {this.handleSubmit}
          >Save Palette</Button>

          </Toolbar>
        </AppBar>
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
          This is the header of the Menu
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon /> 
            </IconButton>
          </div>
          <Divider />
          This is the top part of the menu
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button variant="contained" color="secondary"> Clear Palette </Button>
            <Button variant="contained" color="primary"> Random Color </Button>
          </div>
            <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor}/>
            

            <ValidatorForm onSubmit= {this.addNewColor}>
              <Button 
                variant="contained" 
                color="default" 
                style={{background: this.state.currentColor}}
                // onClick={this.addNewColor}
                type= "submit"
                > add Color
              </Button>
              <TextValidator 
                value = {this.state.newName}
                onChange = {this.handleChange}
                validators={["required", "isColorNameUnique",'isColorUnique' ]}
                errorMessages={['this field is required', "Please add unique color name", "color already used" ]}
                 />
            </ValidatorForm>
          
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          
            {this.state.colors.map(color => (
              <DraggableColorBox color={color.color} name={color.name}/>
            ))}
          
          
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
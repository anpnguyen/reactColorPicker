import React, {Component } from 'react';
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
import Button from '@material-ui/core/Button';
// import DraggableColorBox from './draggableColorBox'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import DraggableColorList from './DraggableColorList'
// import arrayMove from 'array-move';
import {Link} from 'react-router-dom'

const drawerWidth = 400;
const styles = theme => ({

  root: {
    display: "flex"
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent:"space-between",
    height: "64px"

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

  navBtn:{

  }



})

class PaletteFormNav extends Component{

    constructor(props){
        super(props);
        this.state = {
            newPaletteName: ""

        }
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(evt){
       
        this.setState({ [evt.target.name]: evt.target.value})
        
      }

      componentDidMount() {
  
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
          let obj = this.props.palette.find( palette => palette.id.toLowerCase() === this.state.newPaletteName.toLowerCase())
          return (!obj?  true:  false)
        })
    
      }


    render(){

        const {classes, open} = this.props
        const {newPaletteName} = this.state
        return(

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
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>

            

          </Toolbar>


          <div className={classes.navBtn}>
              <Link to="/">
                  <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  >goback
                  </Button>
              </Link>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                >Save Palette
              </Button>

              <ValidatorForm onSubmit= {() => this.props.handleSubmit(newPaletteName)}>
              
                
                <TextValidator 
                  name = "newPaletteName"
                  value = {newPaletteName}
                  onChange = {this.handleChange}
                  validators={["required" ,"isPaletteNameUnique" ]}
                  errorMessages={['this field is required' , "unique plate" ]}
                  />
              </ValidatorForm>
            </div>
        </AppBar>


            </div>
        )


    }

}

export default withStyles(styles, {withTheme: true})(PaletteFormNav)
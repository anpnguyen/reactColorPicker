import {DRAWER_WIDTH} from '../constants'

const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({

  root: {
    display: "flex"
  },

  hide:{
    display: "none"
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent:"space-between",
    height: "64px",
    alignItems: "center"

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
    marginRight: "1rem"
  },

  button: {
    margin: "0 0.5rem"
  },

  link:{
    textDecoration: "none"
  }



})

export default styles
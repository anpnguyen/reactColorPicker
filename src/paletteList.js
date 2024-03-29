import React, { Component } from "react";
import MiniPalette from "./miniPalette";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles/paletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from '@material-ui/core/Button';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      deletingId: ""
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openDialog(id) {
    this.setState({ open: true, deletingId: id });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  gotoPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.setState({ open: false });
  }

  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>ReactColors</h1>
            <Link to="/palette/new" className={classes.clear}>  
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.button}
            >  CREATE PALETTE
              

            </Button>
            </Link>
            <Dialog open={this.state.open} onClose={this.closeDialog}>
              <DialogTitle>Are you sure you want to delete this palette?</DialogTitle>
              <List>
                <ListItem button onClick={this.handleDelete}>
                  <ListItemAvatar>
                    <Avatar style={{ color: '#1E88E5', backgroundColor: '#BBDEFB' }}>
                      <CheckIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>Delete Palette</ListItemText>
                </ListItem>
                <ListItem button onClick={this.closeDialog}>
                  <ListItemAvatar>
                    <Avatar style={{ color: '#e53935', backgroundColor: '#ffcdd2' }}>
                      <CloseIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>Cancel</ListItemText>
                </ListItem>
              </List>
            </Dialog>
          </div>

          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition classNames="fade" timeout={500} key={palette.id}>
                <MiniPalette
                  {...palette}
                  handleClick={() => this.gotoPalette(palette.id)}
                  key={palette.id}
                  id={palette.id}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);

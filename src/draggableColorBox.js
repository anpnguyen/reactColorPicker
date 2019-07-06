import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/draggableColorBoxStyles";

const DraggableColorBox = SortableElement(props => {
  const { classes, name, handleClick, color } = props;

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <span className={classes.boxContent}>{name}</span>
      <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);

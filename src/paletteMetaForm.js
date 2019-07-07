import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: true,
      openEmoji: false,
      newPaletteName: ""
      };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  showEmojiPicker() {
    this.setState({ openForm: false, openEmoji: true });
  }

  savePalette(emoji) {
    let paletteName = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSubmit(paletteName);
    this.setState({ openEmoji: false });
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      let obj = this.props.palette.find(
        palette =>
          palette.paletteName.toLowerCase() ===
          this.state.newPaletteName.toLowerCase()
      );
      return !obj ? true : false;
    });
  }

  render() {
    const { hideForm } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div>
        <Dialog open={this.state.openEmoji} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">Choose An Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>

        <Dialog
          open={this.state.openForm}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose A Palette Name
          </DialogTitle>

          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please choose a name for your new palette.
              </DialogContentText>

              <TextValidator
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                placeholder="Palette Name "
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["this field is required", "unique plate"]}
                fullWidth
                margin="normal"
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={hideForm} 
                color="secondary"
                variant="contained"
                >
                Cancel
              </Button>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;

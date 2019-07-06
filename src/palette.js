import React, { Component } from "react";
import ColorBox from "./colorBox";
import NavBar from "./navBar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    let ColorBoxes = colors[level].map(singleColor => (
      <ColorBox
        background={singleColor[format]}
        name={singleColor.name}
        key={singleColor.id}
        colorId={singleColor.id}
        paletteId={id}
        showFullPalette={true}
      />
    ));

    return (
      <div className={classes.Palette}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showingAllColors={true}
        />

        <div className={classes.PaletteColors}>{ColorBoxes}</div>

        <div>
          <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);

import React, {Component} from 'react';

import Palette from './palette'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'

import './App.css';

class App extends Component{

  render(){
    console.log(generatePalette(seedColors[4]))

    return(
      <Palette palette= {generatePalette(seedColors[4])}/>
    )
  }



}

export default App;

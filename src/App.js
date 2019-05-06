import React, {Component} from 'react';

import Palette from './palette'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'

import {Route, Switch} from 'react-router-dom' 

import './App.css';

class App extends Component{

  render(){
    console.log(generatePalette(seedColors[4]))

    return(
      // <Palette palette= {generatePalette(seedColors[4])}/>
      
      <Switch>
        <Route exact to='/' render={()=> <h1>palette list here</h1>}/>
        <Route exact to='/palette/:id' render={()=> <h1>palette  here</h1>}/>
      </Switch>
    
      )
  }



}

export default App;

import React, {Component} from 'react';

import Palette from './palette'
import PaletteList from './paletteList'
import SingleColorPalette from './singleColorPalette'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'

import {Route, Switch} from 'react-router-dom' 
import './App.css';

class App extends Component{

  findPalette(id){
    return seedColors.find((palette)=>{
      return palette.id === id
    })
  }

  render(){
    // console.log(generatePalette(seedColors[4]))

    return(
      // <Palette palette= {generatePalette(seedColors[4])}/>
      
      <Switch>
        <Route exact path='/' render={(routeProps)=> <PaletteList palettes = {seedColors} {...routeProps}/>}/>
        <Route 
          exact 
          path='/palette/:id' 
          render={routeProps=> ( 
            <Palette 
              palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
            />
          )} 
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps=> ( 
            <SingleColorPalette 
              palette={generatePalette(
              this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId = {routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    
      )
  }



}

export default App;

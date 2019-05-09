import React, {Component} from 'react';

import Palette from './palette'
import PaletteList from './paletteList'
import SingleColorPalette from './singleColorPalette'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'

import NewPaletteForm from './NewPaletteForm'

import {Route, Switch} from 'react-router-dom' 
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))

    this.state = {
      palette: savedPalettes || seedColors
    };
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
    this.deletePalette = this.deletePalette.bind(this)
  }


  findPalette(id){
    return this.state.palette.find((palette)=>{
      return palette.id === id
    })
  }

  savePalette(newPalette){
    // console.log (newPalette)
    this.setState({palette: [...this.state.palette, newPalette]}, 
      this.syncLocalStorage)

  }
  deletePalette(id){
    this.setState(
      state => ({palette: state.palette.filter(palette => palette.id !== id)})
    ,this.syncLocalStorage )
  }


  syncLocalStorage() {
    
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palette)
    );
  }

  render(){
    // console.log(generatePalette(seedColors[4]))

    return(
      // <Palette palette= {generatePalette(seedColors[4])}/>
      
      <Switch>

        <Route 
          exact
          path="/palette/new" render={(routeProps)=> <NewPaletteForm savePalette= {this.savePalette} {...routeProps} palette={this.state.palette}/> }/>
        
        
        <Route exact path='/' render={(routeProps)=> <PaletteList palettes = {this.state.palette} {...routeProps} deletePalette={this.deletePalette}/>}/>
        
        
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

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapView from "./components/map-view/mapview";
import Locations from "./components/locations/locations";
import EventEmitter from 'eventemitter3';

class App extends Component {

  constructor(){
    super();
    this.eventEmitter = new EventEmitter();
  }
  
  render() {
    return (
      <div>
        <MapView eventEmitter={this.eventEmitter} mapClicked={this.mapClicked.bind(this)}></MapView>
        <Locations setLocations={this.mapClicked.bind(this)} eventEmitter={this.eventEmitter}></Locations>
      </div>
    )
  }

  mapClicked(p){
      console.log(p)
  }
}

export default App;

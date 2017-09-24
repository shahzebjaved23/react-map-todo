import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapView from "./components/map-view/mapview";
import Locations from "./components/locations/locations";

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <MapView mapClicked={this.mapClicked.bind(this)}></MapView>
        <Locations></Locations>
      </div>
    )
  }

  mapClicked(p){
      console.log(p)
  }
}

export default App;

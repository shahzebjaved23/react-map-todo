import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapView from "./components/map-view/mapview";

class App extends Component {
  render() {
    return (
      <MapView mapClicked={this.mapClicked.bind(this)}></MapView>
    )
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }

  mapClicked(p){
      console.log(p)
  }
}

export default App;

import React, { Component } from 'react';
import FaAnchor from "react-icons/lib/fa/anchor";
import { compose, withProps, withState, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `70%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
    onClick={props.rootClick.bind(this,props)}
  >
  	{props.positions.map((position)=>{
  		return( 
	  		<Marker
		      position={{ lat: position.lat, lng: position.lng }}
		      onClick={props.onToggleOpen}>
		      <InfoWindow onCloseClick={props.onToggleOpen}>
		        <div>
		          <FaAnchor />
		          {" "}
		          </div>
		      </InfoWindow>
		    </Marker>
		)
  	})}
    
  </GoogleMap>
);

class MapView extends Component {

	constructor(){
		super();
		this.state = {
			positions: [
				{ lat: -34.397, lng: 150.644 }
			],
			selected: nil
		}
	}

	render(){
		return (
			<MapWithControlledZoom saveButtonClicked={this.saveButtonClicked} cancelButtonClicked={this.cancelButtonClicked} positions={this.state.positions} addLocation={this.addLocations.bind(this)} rootClick={this.rootClicked}/>
		)
	}

	// run in the GoogleMap context
	rootClicked(props,p){	
		console.log(props.positions)
		props.addLocation(p)
	}

	addLocations(p){
		this.props.mapClicked();
		var positions = this.state.positions;

		positions.push(
			{
				lat: p.latLng.lat(),
				lng: p.latLng.lng()
			}
		)
		
		this.setState({
			positions: positions 
		})
	}

	saveButtonClicked(refs){
		console.log(refs.refs)
	}

}

export default MapView;
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
    mapElement: <div style={{ height: `50%` }} />,
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
    onClick={props.rootClick}
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
		          Controlled zoom: {props.zoom}
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
			]
		}
	}

	render(){
		return (
			<MapWithControlledZoom positions={this.state.positions} location={this.props.lat,this.props.lng} rootClick={this.props.mapClicked}/>
		)
	}

	addPosition(position){
		this.setState({
			positions: this.state.positions.push(position)
		})
	}

}

export default MapView;
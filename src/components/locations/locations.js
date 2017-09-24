import React, {Component} from "react";
import LocationView from "../location-view/location-view";

class Location extends Component{
	render(){
		var locations = JSON.parse(localStorage.getItem("positions"));

		return (
			<div>
				{
					locations.map((location)=>{
						return (<LocationView location={location}></LocationView>)
					})
				}
			</div>
		)	
	}
}

export default Location;
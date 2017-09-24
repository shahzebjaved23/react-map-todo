import React, {Component} from "react";
import LocationView from "../location-view/location-view";

class Location extends Component{

	constructor(){
		super();
		this.state = {
			locations: JSON.parse(localStorage.getItem("positions"))
		}
	}

	reloadPositions(){
		console.log("reloadPositions")
		this.setState({
			locations: JSON.parse(localStorage.getItem("positions"))
		})
	}

	render(){

		this.props.eventEmitter.on("clicked",this.reloadPositions.bind(this))
		
		return (
			<div>
				{
					this.state.locations.map((location)=>{
						return (<LocationView location={location}></LocationView>)
					})
				}
			</div>
		)	
	}
}

export default Location;
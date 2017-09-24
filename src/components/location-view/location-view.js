import React, {Component} from "react";

class LocationView extends Component{
	
	locationSelected(){
		this.props.eventEmitter.emit("selected",this.props.location);
	}

	removePosition(){
		var locations = JSON.parse(localStorage.getItem("positions"))
		var newLocations = []
		locations.forEach((location)=>{
			if(location.name != this.props.location.name){
				newLocations.push(location)
			}
		})
		localStorage.setItem("positions",JSON.stringify(newLocations))
		this.props.eventEmitter.emit("remove",this.props.location)
	}

	render(){
		return (
			<div>
				<li className={"list-group-item"} style={{listStyle: "none"}}>
					<span style={{cursor: "pointer"}} onClick={this.locationSelected.bind(this)}>{this.props.location.name}</span>
					<button onClick={this.removePosition.bind(this)} className={"btn btn-sm btn-danger pull-right"}>Remove</button>
				</li>
			</div>
		);
	}
}

export default LocationView;

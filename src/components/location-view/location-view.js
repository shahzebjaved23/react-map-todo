import React, {Component} from "react";

class LocationView extends Component{
	
	locationSelected(){
		this.props.eventEmitter.emit("selected",this.props.location);
	}

	render(){
		return (
			<div>
				<li onClick={this.locationSelected.bind(this)} style={{listStyle: "none"}}>{this.props.location.name}</li>
			</div>
		);
	}
}

export default LocationView;

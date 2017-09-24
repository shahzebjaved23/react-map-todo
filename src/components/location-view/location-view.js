import React, {Component} from "react";

class LocationView extends Component{
	render(){
		return (
			<div>
				<li style={{listStyle: "none"}}>{this.props.location.name}</li>
			</div>
		);
	}
}

export default LocationView;

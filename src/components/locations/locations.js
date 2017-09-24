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
				<h3 style={{textAlign: "center"}}>Places To Go</h3>
				<ul className="list-group" style={{textAlign: "center", width: 500+"px", margin: "auto"}}> 
				{
					this.state.locations.map((location)=>{
						return (<LocationView eventEmitter={this.props.eventEmitter} location={location}></LocationView>)
					})
				}
				</ul>
			</div>
		)	
	}
}

export default Location;
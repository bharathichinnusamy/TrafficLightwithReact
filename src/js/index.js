//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

class TrafficLight extends React.Component {
	constructor() {
		super();
		this.process = this.process.bind(this);
		this.state = {
			selectedcolorred: "light red",
			selectedcoloryellow: "light yellow",
			selectedcolorgreen: "light green"
		};
	}
	process(e) {
		var val = e.target.getAttribute("value");
		if (val == "redcolor") {
			this.setState(() => {
				return {
					selectedcolorred: "light red selected",
					selectedcoloryellow: "light yellow",
					selectedcolorgreen: "light green"
				};
			});
		} else if (val == "yellowcolor") {
			this.setState(() => {
				return {
					selectedcolorred: "light red",
					selectedcoloryellow: "light yellow selected",
					selectedcolorgreen: "light green"
				};
			});
		} else {
			this.setState(() => {
				return {
					selectedcolorred: "light red",
					selectedcoloryellow: "light yellow",
					selectedcolorgreen: "light green selected"
				};
			});
		}
	}

	render() {
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={this.state.selectedcolorred}
						value="redcolor"
						onClick={this.process}
					/>
					<div
						className={this.state.selectedcoloryellow}
						value="yellowcolor"
						onClick={this.process}
					/>
					<div
						className={this.state.selectedcolorgreen}
						value="greencolor"
						onClick={this.process}
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

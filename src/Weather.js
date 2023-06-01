import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<div className="Weather">
			<div className="container">
				<form>
					<div className="row">
						<div className="col-6">
							<input
								type="search"
								placeholder="type a city..."
								className="form-control"
							/>
						</div>
						<div className="col-6">
							<input type="submit" value="search" className="btn btn-primary" />
						</div>
					</div>
				</form>
				<h1>Los Angeles</h1>
				<ul>
					<li>Wednesday 7:00</li>
					<li>Mostly Cloudy</li>
				</ul>
				<div className="row">
					<div className="col-6">
						<img
							scr="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
							alt="Cloudy"
						/>{" "}
						6°C
					</div>
					<div className="col-6">
						<ul>
							<li>Precipitation: 15%</li>
							<li>Humidity: 72%</li>
							<li>Wind: 13 km/h</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

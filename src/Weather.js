import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
	const [ready, setReady] = useState(false);
	const [weatherData, setWeatherData] = useState(null);
	function handleResponse(response) {
		setWeatherData({
			temp: response.data.temperature.current,
			wind: response.data.wind.speed,
			description: response.data.condition.description,
			humidity: response.data.temperature.humidity,
			city: response.data.city,
		});

		setReady(true);
	}

	if (ready) {
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
									autoFocus="on"
								/>
							</div>
							<div className="col-6">
								<input
									type="submit"
									value="search"
									className="btn btn-primary"
								/>
							</div>
						</div>
					</form>
					<h1>{weatherData.city}</h1>
					<ul>
						<li>Wednesday 7:00</li>
						<li className="text-capitalize">{weatherData.description}</li>
					</ul>
					<div className="row mt-3">
						<div className="col-6">
							<div className="clearfix">
								<img
									scr={weatherData.icon}
									alt={weatherData.description}
									className="float-left"
								/>
								<div className="float-left">
									{" "}
									<span className="temperature">
										{Math.round(weatherData.temp)}
									</span>
									<span className="unit">°C</span>
								</div>
							</div>
						</div>
						<div className="col-6">
							<ul>
								<li>Humidity: {Math.round(weatherData.humidity)}</li>
								<li>Wind: {Math.round(weatherData.wind)} km/h</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "a002c7ba4b8d6faff3c087bcf141fto4";
		let city = "{weatherData.city}";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}

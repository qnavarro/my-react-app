import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		console.log(response.data.daily);
		setForecast(response.data.daily);
		setLoaded(true);
	}
	console.log(props);

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = `a002c7ba4b8d6faff3c087bcf141fto4`;
		let lon = props.coordinates.longitude;
		let lat = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
	}
}

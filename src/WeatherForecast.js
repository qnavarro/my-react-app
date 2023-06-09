import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}
	console.log(props);

	let apiKey = `a002c7ba4b8d6faff3c087bcf141fto4`;
	let lon = props.coordinates.longitude;
	let lat = props.coordinates.latitude;
	let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<img
						src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
						alt="clear-sky"
					/>
					<div className="WeatherForecast-temperatures">
						{" "}
						<span className="WeatherForecast-temperature-max">19°</span>
						<span className="WeatherForecast-temperature-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}

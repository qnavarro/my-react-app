import React from "react";

export default function WeatherForecastDay(props) {
	function maxTemp() {
		let temp = Math.round(props.temperature.maximum);
		return `${temp}°`;
	}
	function minTemp() {
		let temp = Math.round(props.temperature.maximum);
		return `${temp}°`;
	}

	function day() {
		let date = new Date(props.time * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}
	return (
		<div>
			<div className="WeatherForecast-day">{day()}</div>
			<img src={props.condition.icon_url} alt={props.condition.icon} />
			<div className="WeatherForecast-temperatures">
				{" "}
				<span className="WeatherForecast-temperature-max">{maxTemp()}</span>
				<span className="WeatherForecast-temperature-min">{minTemp()}</span>
			</div>
		</div>
	);
}

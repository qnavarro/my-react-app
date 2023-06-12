import React from "react";

export default function WeatherForecastDay(props) {
	return (
		<div>
			<div className="WeatherForecast-day">{props.time}</div>
			<img src={props.condition.icon_url} alt={props.condition.icon} />
			<div className="WeatherForecast-temperatures">
				{" "}
				<span className="WeatherForecast-temperature-max">
					{props.temperature.minimum}
				</span>
				<span className="WeatherForecast-temperature-min">
					{props.temperature.maximum}
				</span>
			</div>
		</div>
	);
}

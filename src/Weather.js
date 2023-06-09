import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temp: response.data.temperature.current,
			wind: response.data.wind.speed,
			date: new Date(response.data.time * 1000),
			icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
			description: response.data.condition.description,
			humidity: response.data.temperature.humidity,
			city: response.data.city,
		});
	}

	function search() {
		const apiKey = "a002c7ba4b8d6faff3c087bcf141fto4";

		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-6">
								<input
									type="search"
									placeholder="type a city..."
									className="form-control"
									autoFocus="on"
									onChange={handleCityChange}
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
					<WeatherInfo data={weatherData} />
					<WeatherForecast />
				</div>
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}

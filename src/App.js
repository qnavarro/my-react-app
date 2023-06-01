import React from "react";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<h1>Weather App </h1>
			<footer>
				This project was coded by{" "}
				<a
					href="https://meek-lebkuchen-5e6974.netlify.app/about.html"
					target="_blank"
					rel="noreferrer"
				>
					Queenie Navarro
				</a>{" "}
				and is {""}
				<a
					href="https://github.com/qnavarro/my-react-app"
					target="_blank"
					rel="noreferrer"
				>
					open sourced on GitHub
				</a>
			</footer>
		</div>
	);
}

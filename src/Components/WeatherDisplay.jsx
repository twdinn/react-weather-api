// WeatherDisplay.js
import React from "react";

function WeatherDisplay({ data }) {
  const { name, weather, main } = data;
  const weatherType = weather[0].description;
  const temp = `Temp: ${main.temp}°C`;
  const maxTemp = `Max Temp: ${main.temp_max}°C`;
  const minTemp = `Min Temp: ${main.temp_min}°C`;

  return (
    <div className="result-container">
      <div className="city-container">
        <div className="city-name">{name}</div>
      </div>
      <div className="weather-type">{weatherType}</div>
      <div className="temp">{temp}</div>
      <div className="min-temp">{minTemp}</div>
      <div className="max-temp">{maxTemp}</div>
    </div>
  );
}

export default WeatherDisplay;

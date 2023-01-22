// App.js
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";

const API_KEY = "424cb45f603168c74d854972abb8d026";

function App() {
  const [weatherData, setWeatherData] = useState({});

  const handleSearch = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();

    setWeatherData(json);
  };

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData.name && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;

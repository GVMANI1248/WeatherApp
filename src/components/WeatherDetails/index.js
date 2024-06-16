import React from "react";
import "./index.css";

const WeatherDetails = ({ weather, getCurrentDateTime }) => {
  return (
    <div className="weather-container">
      <div className="container">
        <h1>Location</h1>
        <p>{weather.name}, {weather.sys.country}</p>
      </div>
      <div className="container">
        <h1>Temperature Celsius</h1>
        <p>{weather.main.temp}°C</p>
      </div>
      <div className="container">
        <h1>Condition</h1>
        <p>{weather.weather[0].main}</p>
      </div>
      <div className="container">
        <h1>Description</h1>
        <p>{weather.weather[0].description}</p>
      </div>
      <div className="container">
        <h1>Humidity</h1>
        <p>{weather.main.humidity}%</p>
      </div>
      <div className="container">
        <h1>Wind Speed</h1>
        <p>{weather.wind.speed} m/s</p>
      </div>
      <div className="container">
        <h1>Date and Time</h1>
        <p>{getCurrentDateTime()}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;

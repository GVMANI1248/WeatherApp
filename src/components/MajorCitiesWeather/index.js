import React, { useState, useEffect } from "react";
import "./index.css";

const cities = ["DELHI", "MUMBAI", "KOLKATA", "CHENNAI", "BENGALURU", "HYDERABAD", "AHMEDABAD", "PUNE", "JAIPUR", "LUCKNOW"];

const MajorCitiesWeather = ({ api }) => {
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await Promise.all(
        cities.map(async (city) => {
          const response = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`);
          const data = await response.json();
          return { name: city, temp: data.main.temp };
        })
      );
      setCityWeather(weatherData);
    };

    fetchWeather();
  }, [api]);

  return (
    <div className="major-cities-weather">
      <h2>Weather of Major Cities</h2>
      <div className="cities-container">
        {cityWeather.map((city) => (
          <div key={city.name} className="city-card">
            <h3>{city.name}</h3>
            <p>{city.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorCitiesWeather;

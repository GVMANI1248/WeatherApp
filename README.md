# React Weather App

A simple weather application built with React, using the OpenWeatherMap API to fetch weather data.

## Features

- Search for weather by city/town name
- Display current weather details including temperature, condition, humidity, wind speed, etc.
- Toggle between dark and light mode
- View weather details for major cities in India

## Screenshots

![Screenshot](./screenshot.png)

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5 & CSS3

## Project Structure

The project structure is as follows:

src/
├── components/
|   ├── NavBar
│   |   ├── NavBar.js
│   |   └── NavBar.css
|   ├── Search
│   |   ├── Search.js
│   |   └── Search.css
|   ├── WetherDetails
│   |   ├── WeatherDetails.js
│   |   └── WeatherDetails.css
|   ├── WeatherTable
│   |   ├── WeatherTable.js
│   |   └── WeatherTable.css
|   └── MajorCitiesWeather
│       ├── MajorCitiesWeather.js
│       └── MajorCitiesWeather.css
├── App.js
├── App.css
└── index.js

## How to Use

- Enter a city or town name in the search input and click "Search" to fetch weather data.
- Toggle the dark/light mode using the toggle button in the navbar.
- View weather details for major cities by scrolling down to the "Weather of Major Cities" section

## Additional Resources

- OpenWeatherMap API Documentation: https://openweathermap.org/api

## Website
- Visit the live site here.
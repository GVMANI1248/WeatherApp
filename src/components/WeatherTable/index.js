import React from "react";
import './index.css'
const WeatherTable = ({ weather }) => {
  return (
    <table className="details-table">
      <tbody>
        <tr>
          <td>Pressure</td>
          <td>{weather.main.pressure} hPa</td>
        </tr>
        <tr>
          <td>Sea Level</td>
          <td>{weather.main.sea_level} hPa</td>
        </tr>
        <tr>
          <td>Ground Level</td>
          <td>{weather.main.grnd_level} hPa</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>{weather.visibility} m</td>
        </tr>
        <tr>
          <td>Wind Gust</td>
          <td>{weather.wind.gust} m/s</td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;

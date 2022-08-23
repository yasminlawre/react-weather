import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-3">
            <input
              type="search"
              placeholder="Search city"
              className="city-input"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="search-button w-100"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday 10:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 details">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />

          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Wind: 8 km/h</li>
            <li>Humidity: 48%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

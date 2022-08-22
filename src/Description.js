import React from "react";
import "./description.css";

export default function Descripton() {
  return (
    <div className="headings">
      <h1 id="city">London</h1>
      <ul>
        <li className="date">Monday 10:00</li>
        <li className="description">Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          ></img>
          6°C
        </div>

        <div className="col-6">
          <ul>
            <li>
              Wind: <span id="wind"></span>7 kph
            </li>
            <li>
              Humidity: <span id="humidity"></span>64%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

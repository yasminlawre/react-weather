import React from "react";
import "./description.css";

export default function Description() {
  return (
    <div className="description">
      <div className="row">
        <div className="icon col"></div>
        <div className="details col">
          <div id="units" className="unit">
            20°C
          </div>
          Wind: <span id="wind"></span> kph <br />
          Humidity: <span id="humidity"></span>%
        </div>
      </div>
    </div>
  );
}

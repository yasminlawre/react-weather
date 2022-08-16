import React from "react";
import "./form.css";

export default function Form() {
  return (
    <form id="search-form">
      <br />
      <input
        type="text"
        placeholder="Search city"
        autoComplete="off"
        id="city-input"
        className="city-input"
      />
      <button type="submit" className="search-button btn btn-light">
        Search
      </button>
      <button className="btn btn-light current-location" id="current">
        Current
      </button>
    </form>
  );
}

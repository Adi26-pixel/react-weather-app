import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "38cc12b312104o45t5c1faaa8bf9b6c0";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city ..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <br />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "Loading ...";
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function dailyWeek(dailyForecast, index) {
    if (index < 5) {
      return (
        <div className="col" key={index}>
          <WeatherForecastDay data={dailyForecast} />
        </div>
      );
    } else {
      return null;
    }
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">{forecast.map(dailyWeek)}</div>
      </div>
    );
  } else {
    let apiKey = "38cc12b312104o45t5c1faaa8bf9b6c0";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

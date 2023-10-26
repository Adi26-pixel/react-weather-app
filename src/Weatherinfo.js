import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-8">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <span className="text-capitalize">{props.data.description}</span>,
              Humidity:{" "}
              <span className="humidity-color">{props.data.humidity}%</span>,
              Wind:{" "}
              <span className="wind-color">
                {Math.round(props.data.wind)} km/h
              </span>
            </li>
            <li className="text-capitalize"></li>
          </ul>
        </div>
        <div className="col-4 mt-3 weather-icon">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} />
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

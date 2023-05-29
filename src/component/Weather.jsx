import React, { useState } from "react";
import "./Weather.css";
import { fetchData } from "../FetchData";
import { AiOutlineSearch } from "react-icons/ai";

const Weather = () => {
  const [wdata, setWdata] = useState({
    city: "London",
    temperature: "60",
    text: "Cloudy",
    humidity: "46",
    pressure: "1028",
    speed: "18",
    sunrise: "4:52 AM",
    sunset: "9:04 PM",
  });

  const [name, setName] = useState("");

  const handleClick = () => {
    const weatherData = async () => {
      const data = await fetchData(name)
        .then((res) => {
          setWdata({
            ...wdata,
            city: res.location.city,
            temperature: res.current_observation.condition.temperature,
            text: res.current_observation.condition.text,
            humidity: res.current_observation.atmosphere.humidity,
            pressure: res.current_observation.atmosphere.pressure,
            speed: res.current_observation.wind.speed,
            sunrise: res.current_observation.astronomy.sunrise,
            sunset: res.current_observation.astronomy.sunset,
          });
        })
        .catch((e) => console.log(e));
    };
    weatherData();
  };

  return (
    <div className="weather">
      <div className="weather-container">
        <div className="weather-wrapper">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Enter city name"
              onChange={(e) => setName(e.target.value)}
            />
            <AiOutlineSearch onClick={handleClick} className="icon" />
          </div>
          <div>
            <h2 className="w-top">{wdata.city}</h2>
            <div className="w-middle">{wdata.temperature}°F</div>
            <div className="condition">{wdata.text}</div>
            <div className="w-bottom">
              <span>Pressure : {Math.round(wdata.pressure)} hPa</span>
              <span>Humidity : {Math.round(wdata.humidity)} %</span>
              <span>Wind speed : {wdata.speed} kmph</span>
              <span>Sunrise : {wdata.sunrise}</span>
              <span>Sunset : {wdata.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

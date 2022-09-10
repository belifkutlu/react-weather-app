import React from "react";

import "./WeatherCard.css";

const WeatherCard = ({ item, index, weekDays }) => {
  return (
    <div
      key={item.date}
      className={`weather-card ${index === 0 ? "select" : ""} `}
    >
      <p> {item.date}</p>
      <p>{weekDays[index]}</p>
      <img src={item.day.condition.icon} alt="" />
      <p style={{ fontSize: "10px", textAlign: "center" }}>
        {item.day.condition.text}
      </p>

      <span> {item.day.mintemp_c}ºC </span>
      <span>{item.day.maxtemp_c}ºC</span>
    </div>
  );
};

export default WeatherCard;

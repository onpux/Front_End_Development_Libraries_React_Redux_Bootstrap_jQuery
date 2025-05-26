// /src/WeatherDashboard/components/WeatherCard.jsx
import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="card shadow-sm p-4">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">
        <strong>Temperatura:</strong> {main.temp}°C
      </p>
      <p className="card-text">
        <strong>Clima:</strong> {weather[0].description}
      </p>
      <p className="card-text">
        <strong>Humedad:</strong> {main.humidity}%
      </p>
      <p className="card-text">
        <strong>Viento:</strong> {wind.speed} m/s
      </p>
    </div>
  );
};

export default WeatherCard;

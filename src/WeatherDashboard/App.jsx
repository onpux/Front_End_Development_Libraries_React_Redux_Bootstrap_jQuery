// /src/WeatherDashboard/App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/weatherService';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Clima en tu ciudad</h2>
      <SearchBar onSearch={handleSearch} />
      {error && <div className="alert alert-danger">{error}</div>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;

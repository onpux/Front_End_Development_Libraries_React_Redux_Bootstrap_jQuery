// /src/WeatherDashboard/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Ingrese una ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;

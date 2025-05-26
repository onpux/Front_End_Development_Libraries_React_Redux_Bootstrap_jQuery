// /src/WeatherDashboard/services/weatherService.js
const API_KEY = 'TU_API_KEY_AQUI';  // Reemplaza con tu API key válida
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);

  if (!response.ok) {
    throw new Error('Ciudad no encontrada');
  }

  const data = await response.json();
  return data;
};

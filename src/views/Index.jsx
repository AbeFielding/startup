import React, { useState, useEffect } from 'react';
import '../styles/Index.css';  // Import external CSS for styling

const Index = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Provo');
  const API_KEY = '3837f7f4bd1f4e4bb7e02213242809';

  const fetchWeather = async (location) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  return (
    <div className="homepage">
      <h1 className="homepage-title">Weather Dashboard</h1>
      <p className="intro-text">Select a location to view the current weather.</p>

      <div className="location-selector">
        <label htmlFor="location">Choose a location: </label>
        <select 
          id="location" 
          onChange={(e) => setLocation(e.target.value)} 
          value={location}
        >
          <option value="Provo">Provo</option>
          <option value="84043">Lehi</option>
          <option value="Springville">Springville</option>
          <option value="American Fork">American Fork</option>
        </select>
      </div>

      {weatherData ? (
        <div className="weather-card">
          <h2 className="weather-location">
            Weather in {weatherData.location.name}, {weatherData.location.region}
          </h2>
          <div className="weather-info">
            <img 
              src={`https:${weatherData.current.condition.icon}`} 
              alt={weatherData.current.condition.text} 
              className="weather-icon"
            />
            <div className="weather-details">
              <p><strong>Temperature:</strong> {weatherData.current.temp_f}°F</p>
              <p><strong>Condition:</strong> {weatherData.current.condition.text}</p>
              <p><strong>Wind:</strong> {weatherData.current.wind_mph} mph</p>
              <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">Loading weather data...</div>
      )}
    </div>
  );
};

export default Index;

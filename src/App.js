import React, { useState } from 'react';
import WeatherCard from './WeatherCard';

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace this

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🌤️ SkySnap</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;

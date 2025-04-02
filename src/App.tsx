import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
  interface WeatherData {
    main: {
      temp: number;
      humidity: number;
    };
    weather: { description: string }[];
    wind: { speed: number };
  }

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("Bhopal");
  const [error, setError] = useState("");

  // Function to fetch weather data
  const fetchWeatherData = async (cityName: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city.");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(""); // Reset error if successful
    } catch (err) {
      setError((err as Error).message);
      setWeatherData(null);
    }
  };

  // Fetch data when city changes
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <>
    <div className="container mx-auto py-10 px-5">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md mx-auto">
        <div className="text-center space-y-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <h1 className="font-bold text-4xl text-blue-600">{city}</h1>
  
          {error ? (
            <p className="text-red-600 font-semibold">{error}</p>
          ) : weatherData ? (
            <>
              <p className="text-2xl font-semibold text-gray-800">{weatherData.main.temp}°C</p>
              <p className="text-lg text-gray-600">{weatherData.weather[0].description}</p>
            </>
          ) : (
            <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
          )}
        </div>
  
        <div className="flex justify-between mt-6">
          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-2">Humidity</p>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium">
              {weatherData ? `${weatherData.main.humidity}%` : "--"}
            </span>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-2">Wind Speed</p>
            <span className="bg-blue-400 text-white px-4 py-2 rounded-full font-medium">
              {weatherData ? `${weatherData.wind.speed} km/h` : "--"}
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default App;

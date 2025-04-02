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
  const [inputCity, setInputCity] = useState("Bhopal");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch weather data
  const fetchWeatherData = async (cityName: string) => {
    setIsLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city.");
      }

      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError((err as Error).message);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (inputCity.trim()) {
      setCity(inputCity);
      fetchWeatherData(inputCity);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-10 px-5">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-md mx-auto shadow-2xl border border-white/20">
        <div className="text-center space-y-6">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter City"
              className="border border-white/30 bg-white/10 text-white rounded-lg px-4 py-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#a8e063] transition duration-300 placeholder-white/70"
            />
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-[#a8e063] hover:bg-[#8ecf4d] text-[#0f2027] p-3 rounded-lg transition duration-300 disabled:opacity-50"
            >
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
            </button>
          </div>
          
          <h1 className="font-bold text-4xl text-[#a8e063]">{city}</h1>
  
          {error ? (
            <p className="text-red-300 font-semibold">{error}</p>
          ) : isLoading ? (
            <div className="space-y-4">
              <div className="h-10 w-20 bg-white/20 rounded-lg mx-auto animate-pulse"></div>
              <div className="h-6 w-32 bg-white/20 rounded-lg mx-auto animate-pulse"></div>
            </div>
          ) : weatherData ? (
            <>
              <p className="text-5xl font-bold text-white">
                {Math.round(weatherData.main.temp)}°C
              </p>
              <p className="text-xl text-white/80 capitalize">
                {weatherData.weather[0].description}
              </p>
            </>
          ) : (
            <p className="text-white/50 text-lg animate-pulse">Loading...</p>
          )}
        </div>
  
        <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
          <div className="text-center">
            <p className="font-semibold text-white/80 mb-2">Humidity</p>
            <span className="bg-white/20 text-white px-5 py-2 rounded-full font-medium">
              {weatherData ? `${Math.round(weatherData.main.humidity)}%` : "--"}
            </span>
          </div>
          <div className="text-center">
            <p className="font-semibold text-white/80 mb-2">Wind Speed</p>
            <span className="bg-white/20 text-white px-5 py-2 rounded-full font-medium">
              {weatherData ? `${Math.round(weatherData.wind.speed)} km/h` : "--"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
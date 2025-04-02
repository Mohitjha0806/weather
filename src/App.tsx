import React from 'react';
import './App.css';

function App() {
  return (
   <>
  <div className="container mx-auto py-5">
  <div className="bg-gray-100 shadow-lg rounded-lg p-6">
    <div className="text-center">
      <h1 className="font-semibold text-3xl text-red-600">Bhopal</h1>
      <p className="text-xl font-bold">33°C</p>
      <p className="text-gray-500">Cloudy</p>
    </div>
    <div className="flex justify-around mt-4">
      <div className="text-center">
        <p className="font-bold">Humidity</p>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full">60%</span>
      </div>
      <div className="text-center">
        <p className="font-bold">Wind Speed</p>
        <span className="bg-blue-400 text-white px-3 py-1 rounded-full">11 km/h</span>
      </div>
    </div>
    <div className="mt-6">
      <h2 className="text-center text-green-600 text-2xl font-semibold">5-Day Forecast</h2>
      <div className="flex justify-center gap-4 mt-4">
        <div className="border border-gray-400 p-4 text-center rounded-md">
          <p className="font-bold">Monday</p>
          <p className="text-yellow-500">Cloudy</p>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full">4°C</span>
        </div>
        <div className="border border-gray-400 p-4 text-center rounded-md">
          <p className="font-bold">Tuesday</p>
          <p className="text-yellow-500">Cloudy</p>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full">6°C</span>
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  );
}

export default App;

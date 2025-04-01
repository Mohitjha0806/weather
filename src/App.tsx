import React from 'react';
import './style/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <>
    <div className="container py-5">
  <div className="card bg-light shadow">
    <div className="card-header text-center">
      <h1 className="fw-semibold display-1 text-danger">Bhopal</h1>
      <p className="temperature fs-4 fw-bold">60°F</p>
      <p className="condition text-secondary">Cloudy</p>
    </div>
    <div className="card-body">
      <div className="weather-details d-flex justify-content-around">
        <div className="text-center">
          <p className="fw-bold mb-1">Humidity</p>
          <p className="badge bg-primary text-white">60%</p>
        </div>
        <div className="text-center">
          <p className="fw-bold mb-1">Wind Speed</p>
          <p className="badge bg-info text-white">7 mph</p>
        </div>
      </div>
      <div className="forecast mt-4">
        <h2 className="forecast-header text-center text-success">5-Day Forecast</h2>
        <div className="forecast-days d-flex justify-content-center gap-3">
          <div className="forecast-day card p-3 text-center border-secondary">
            <p className="fw-bold">Monday</p>
            <p className="text-warning">Cloudy</p>
            <p className="badge bg-danger text-white">12°F</p>
          </div>
          <div className="forecast-day card p-3 text-center border-secondary">
            <p className="fw-bold">Monday</p>
            <p className="text-warning">Cloudy</p>
            <p className="badge bg-danger text-white">12°F</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  );
}

export default App;

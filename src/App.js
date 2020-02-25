import React from 'react';

import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <div className="App">
      <WeatherCard temp = {10} />
      <WeatherCard temp = {22} />
      <WeatherCard temp = {-15} />
    </div>
  );
}

export default App;


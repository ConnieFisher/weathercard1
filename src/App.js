import React from 'react';

import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
const data = async () => {
  const apiRes = await fetch(
    "https://api.darksky.net/forecast/65dcb962172561d54e1a24fec550cb63/35.1074829,-81.074356"
    
  );
  const resJSON= await apiRes.json();
  return resJSON;
};

data().then(res=>console.log(res.currently.temperature));


  return (
    <div className="App">
      <WeatherCard temp = {10} condition='sleet' city='London' country='UK'/>
      <WeatherCard temp = {22} condition='rain' city='Portland' country='US'/>
      <WeatherCard temp = {-15} condition='snow' city='Berlin' country='DE'/>
    </div>
  );
}

export default App;


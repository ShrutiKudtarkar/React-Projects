import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './WeatherApp.css'

function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike : 24.25,
        temp: 25.6,
        tempMin: 25.5,
        tempMax: 25.5,
        humidity: 47,
        weather: "Haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

  return (
    <div style={{textAlign: "center", color: 'black'}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
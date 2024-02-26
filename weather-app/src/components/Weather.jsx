import React, { useState } from 'react'

const Weather = () => {

    const [weatherData, setWeatherData] = useState([]);


    return (
        <div>

            <h1>
                Weather App
            </h1>

            <span>From: </span>

            <select>
                <option>Ho Chi Minh</option>
                <option>Singapore</option>
                <option>Kuala Lumpur</option>
                <option>Tokyo</option>
                <option>Athens</option>
            </select>
        </div>
    )
}

export default Weather

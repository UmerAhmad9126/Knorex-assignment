import React, { useEffect, useState } from 'react'

const Weather = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("");

    const getWeatherData = async () => {
        try {
            let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d74d995fd0d61f03d84fee1a3bd14dde`);
            let data = await res.json();
            // console.log('data:', data);
            setWeatherData(data);
        } catch (error) {
            console.log('error:', error);
        }
    }

    console.log('weatherData:', weatherData);
    // console.log('city:', city)

    useEffect(() => {
        getWeatherData();
    }, [city]);

    return (
        <div>

            <h1>
                Weather App
            </h1>
            <span>From: </span>

            <select onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                <option value={"Ho Chi Minh"}>Ho Chi Minh</option>
                <option value={"Singapore"}>Singapore</option>
                <option value={"Kuala Lumpur"}>Kuala Lumpur</option>
                <option value={"Tokyo"}>Tokyo</option>
                <option value={"Athens"}>Athens</option>
            </select>

            <div style={{
                display: 'flex',
                justifyContent: "space-around"
            }}>
                <div>
                    <h3>Current Weather</h3>
                    <div>
                        <p>Tempreture: {weatherData.list && weatherData.list[0].main.temp}C</p>
                        <img src={weatherData.list && weatherData.list[0].weather.icon} />
                    </div>
                </div>

                <div>
                    <h3>Next Three Days</h3>

                    <div>
                        <p>Date: {weatherData.list && weatherData.list[6].dt_txt}</p>
                        <p>Tempreture: {weatherData.list && weatherData.list[6].main.temp}C</p>
                        <img src={weatherData.list && weatherData.list[6].weather.icon} />
                    </div>

                    <div>
                        <p>Date: {weatherData.list && weatherData.list[14].dt_txt}</p>
                        <p>Tempreture: {weatherData.list && weatherData.list[14].main.temp}C</p>
                        <img src={weatherData.list && weatherData.list[14].weather.icon} />
                    </div>

                    <div>
                        <p>Date: {weatherData.list && weatherData.list[22].dt_txt}</p>
                        <p>Tempreture: {weatherData.list && weatherData.list[22].main.temp}C</p>
                        <img src={weatherData.list && weatherData.list[22].weather.icon} />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Weather

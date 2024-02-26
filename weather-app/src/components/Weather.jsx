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

    // console.log('weatherData:', weatherData);
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
                <option value={"Ho Chi Minh"}>Ho Chi Minh</option>
                <option value={"Singapore"}>Singapore</option>
                <option value={"Kuala Lumpur"}>Kuala Lumpur</option>
                <option value={"Tokyo"}>Tokyo</option>
                <option value={"Athens"}>Athens</option>
            </select>

            <div>
                <div>
                    <p>current weather</p>
                    <p>Next three days</p>
                </div>

                <div>
                    {/* Day-1 */}
                    <p>
                        {weatherData || weatherData.list[0].main.temp}
                    </p>
                    <img src={weatherData || weatherData.list[0].weather.icon} />

                    {/* Day-2 */}
                    <p>
                        {weatherData || weatherData.list[6].dt_txt}
                        <img src={weatherData || weatherData.list[6].weather.icon} />
                        {weatherData || weatherData.list[6].main.temp}
                    </p>

                    {/* Day-3 */}
                    <p>
                        {weatherData || weatherData.list[6].dt_txt}
                        <img src={weatherData || weatherData.list[6].weather.icon} />
                        {weatherData || weatherData.list[6].main.temp}
                    </p>

                    {/* day-4 */}
                    <p>
                        {weatherData || weatherData.list[6].dt_txt}
                        <img src={weatherData || weatherData.list[6].weather.icon} />
                        {weatherData || weatherData.list[6].main.temp}
                    </p>
                </div>


            </div>


        </div>
    )
}

export default Weather

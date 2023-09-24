import './CurrentWeather.css';
import { useLoaderData } from 'react-router-dom';
import { GLOBAL_GET_WEATHER_ICON_URL } from '../../globals';

function CurrentWeather() {
    const currentWeatherData = useLoaderData().currentWeather;
    console.log("33", currentWeatherData);

    // return (
    //     <div className="logo-layout">
    //         <div className="logo">
    //             <img src="/assets/london.jpeg" alt="London Image" />
    //         </div>
    //         <div className="content">
    //             <h1>London</h1>
    //             <div>{currentWeatherData.weather[0].description}</div>
    //             <img src={GLOBAL_GET_WEATHER_ICON_URL(currentWeatherData.weather[0].icon)} alt="City weather icon" />
    //             <div className="text-div">Feels Like: {currentWeatherData.main.feels_like}</div>
    //             <div className="text-div">Humidity: {currentWeatherData.main.humidity}</div>
    //             <div className="text-div">Min/Max temperatures: {currentWeatherData.main.temp_min} / {currentWeatherData.main.temp_max}</div>
    //             <div className="text-div">Wind Speed: {currentWeatherData.wind.speed}</div>
                
    //             <div className="text-div">Sunrise: {currentWeatherData.sys.sunrise}</div>
    //             <div className="text-div">Sunset: {currentWeatherData.sys.sunset}</div>
    //         </div>
    //     </div>
    // );
    return 1
}

export default CurrentWeather;
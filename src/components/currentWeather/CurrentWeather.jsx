import './CurrentWeather.css';
import { useLoaderData } from 'react-router-dom';
import { GLOBAL_GET_WEATHER_ICON_URL } from '../../globals';

function CurrentWeather() {
    const prefetchedWeatherData = useLoaderData();

    return (
        <div className="logo-layout">
            <div className="logo">
                <img src="/assets/london.jpeg" alt="London Image" />
            </div>
            <div className="content">
                <h1>London</h1>
                <div>{prefetchedWeatherData.weather[0].description}</div>
                <img src={GLOBAL_GET_WEATHER_ICON_URL(prefetchedWeatherData.weather[0].icon)} alt="City weather icon" />
                <div className="text-div">Feels Like: {prefetchedWeatherData.main.feels_like}</div>
                <div className="text-div">Humidity: {prefetchedWeatherData.main.humidity}</div>
                <div className="text-div">Min/Max temperatures: {prefetchedWeatherData.main.temp_min} / {prefetchedWeatherData.main.temp_max}</div>
                <div className="text-div">Wind Speed: {prefetchedWeatherData.wind.speed}</div>
                
                <div className="text-div">Sunrise: {prefetchedWeatherData.sys.sunrise}</div>
                <div className="text-div">Sunset: {prefetchedWeatherData.sys.sunset}</div>
            </div>
        </div>
    );
}

export default CurrentWeather;

import { useLoaderData } from 'react-router-dom';
import { GET_WEATHER_ICON_URL } from '../../../backend-services/endpointsUrls';
import { FAVOURITE_CITY_NAME } from '../../../globals';
import './FavouriteCityCurrentWeather.css';

function FavouriteCityCurrentWeather() {
    const currentWeatherData = useLoaderData().currentWeather;

    const convertUnixToHumanReadableHours = (value) => {
        const date = new Date(value * 1000);
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();
        return hours + ":" + minutes;
    }

    return (
        <div className="current-weather-wrapper">
            <div className="fav-city-image">
                <img src="/assets/london.jpeg" alt="Favourite city image" />
            </div>
            <div className="current-weather-data">
                <h1>{FAVOURITE_CITY_NAME}</h1>
                <img src={GET_WEATHER_ICON_URL(currentWeatherData.weather[0].icon)} alt="City weather icon" />
                <div className="text-div">Feels Like: {currentWeatherData.main.feels_like.toFixed(0)}°C</div>
                <div className="text-div">Humidity: {currentWeatherData.main.humidity}</div>
                <div className="text-div">Min/Max temperatures: {currentWeatherData.main.temp_min.toFixed(0)}°C / {currentWeatherData.main.temp_max.toFixed(0)}°C</div>
                <div className="text-div">Wind Speed: {currentWeatherData.wind.speed}</div>
                <div className="text-div">Sunrise: {convertUnixToHumanReadableHours(currentWeatherData.sys.sunrise)}</div>
                <div className="text-div">Sunset: {convertUnixToHumanReadableHours(currentWeatherData.sys.sunset)}</div>
            </div>
        </div>
    )
}

export default FavouriteCityCurrentWeather;
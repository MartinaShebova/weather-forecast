import { GET_WEATHER_ICON_URL } from '../../backend-services/endpointsUrls';
import './WeatherInfoBox.css';

function WeatherInfoBox({ iconName, description, date, temp, wind }) {

    return <div className="box-wrapper">
        <div className="weather-icon">
            <img
                src={GET_WEATHER_ICON_URL(iconName)}
                alt={description}
            />
            <div className="temp">{temp}°C</div>
        </div>

        <div className="weather-details">
            <div className="weather-date">
                {date}
            </div>
            <div className="wind">
                Wind speed: {wind}
            </div>
        </div>
    </div>
}

export default WeatherInfoBox;
import { GET_WEATHER_ICON_URL } from "../../backend-services/endpointsUrls";
import './WeatherByHours.css';

function WeatherByHours({ fiveDaysWeatherData, date }) {

    const retrieveDataForCurrentDay = () => {
        let currentDayInfo = [];

        fiveDaysWeatherData.forEach((dayInfo, i) => {
            const currentDate = new Date(date);
            const currentDay = currentDate.getDate();

            const dateFromDayInfo = new Date(dayInfo.dt_txt);
            const extractedDay = dateFromDayInfo.getDate();

            if (currentDay === extractedDay) {
                currentDayInfo.push(dayInfo);
            }
        })

        return currentDayInfo;
    }

    return <div className="detailed-forecast-wrapper">
        {retrieveDataForCurrentDay().map(info => {
            return <div key={Math.random() + 1} className="detailed-box">
                <div className="weather-icon">
                    <img
                        src={GET_WEATHER_ICON_URL(info.weather[0].icon)}
                        alt={info.weather[0].main}
                    />
                    <div className="temp">{info.main.temp.toFixed(0)}°C</div>
                </div>

                <div className="weather-details">
                    <div className="weather-date">
                        {info.dt_txt}
                    </div>
                    <div className="wind">
                        Feels like: {info.main.feels_like.toFixed(0)}°C
                    </div>
                    <div className="wind">
                        Min temp: {info.main.temp_min.toFixed(0)}°C
                    </div>
                    <div className="wind">
                        Max temp: {info.main.temp_max.toFixed(0)}°C
                    </div>
                    <div className="wind">
                        Humidity: {info.main.humidity}
                    </div>
                    <div className="wind">
                        Wind speed: {info.wind.speed}
                    </div>
                    <div className="wind">
                        Pressure: {info.main.pressure}
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default WeatherByHours;
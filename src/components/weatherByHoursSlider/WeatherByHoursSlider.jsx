import WeatherInfoBox from "../weatherInfoBox/WeatherInfoBox";
import { GLOBAL_GET_WEATHER_ICON_URL } from "../../globals";
import './WeatherByHoursSlider.css';

function WeatherByHoursSlider({ fiveDaysWeatherData, date }) {

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
                        src={GLOBAL_GET_WEATHER_ICON_URL(info.weather[0].icon)}
                        alt={info.weather[0].main}
                    />
                    <div className="temp">{info.main.temp}°C</div>
                </div>

                <div className="weather-details">
                    <div className="weather-date">
                        {info.dt_txt}
                    </div>
                    <div className="wind">
                        Feels like: {info.main.feels_like}
                    </div>
                    <div className="wind">
                        Min temp: {info.main.temp_min}
                    </div>
                    <div className="wind">
                        Max temp: {info.main.temp_max}
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

export default WeatherByHoursSlider;
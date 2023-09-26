import { GET_WEATHER_ICON_URL } from "../../backend-services/endpointsUrls";
import moment from "moment";
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

    const formatDate = (date) => {
        const inputDateTimeString = date;
        const dateTime = moment(inputDateTimeString, "YYYY-MM-DD HH:mm:ss");

        const formattedDate = dateTime.format("DD.MM.YYYY");
        const time = dateTime.format("h A");

        return {
            formattedDate,
            time
        }
    }

    return <div className="detailed-forecast-wrapper" data-testid="detailed-forecast">
        {retrieveDataForCurrentDay().map(info => {
            return <div key={Math.random() + 1} className="detailed-box">
                <div className="weather-icon">
                    <div className="img-temp-wrapper">
                        <img
                            src={GET_WEATHER_ICON_URL(info.weather[0].icon)}
                            alt={info.weather[0].main}
                        />
                        <div className="temp">{info.main.temp.toFixed(0)}°C</div>
                    </div>
                    <div className="time">{formatDate(info.dt_txt).time}</div>
                </div>

                <div className="weather-details">
                    <div className="weather-date">
                        Date: {formatDate(info.dt_txt).formattedDate}
                    </div>
                    <div>
                        Feels like: {info.main.feels_like.toFixed(0)}°C
                    </div>
                    <div>
                        Min temp: {info.main.temp_min.toFixed(0)}°C
                    </div>
                    <div>
                        Max temp: {info.main.temp_max.toFixed(0)}°C
                    </div>
                    <div>
                        Humidity: {info.main.humidity}
                    </div>
                    <div>
                        Wind speed: {info.wind.speed}
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default WeatherByHours;
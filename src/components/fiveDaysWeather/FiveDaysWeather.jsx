import { useState } from 'react';
import WeatherByHours from '../weatherByHours/WeatherByHours';
import WeatherInfoBox from '../weatherInfoBox/WeatherInfoBox';
import './FiveDaysWeather.css';

function FiveDaysWeather({ cityName, fiveDaysWeatherData, showHourlyForecast }) {

    const [showByHours, setShowByHours] = useState(false);
    const [dayDate, setDayDate] = useState(null);
    const [isDetailedViewActivate, setIsDetailedViewActivate] = useState(false);

    const filterFiveDaysWeather = () => {
        // Get today's date
        const today = new Date().toLocaleDateString();

        // Initialize an object to store daily forecast data (excluding today)
        const dailyForecasts = {};

        // Loop through the forecast list and store daily forecast data (excluding today)
        fiveDaysWeatherData.forEach((forecast) => {
            // Extract the date (without time) from the forecast timestamp
            const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();

            // Exclude today's date
            if (forecastDate !== today) {
                // Initialize or update daily forecast data for the date
                if (!dailyForecasts[forecastDate]) {
                    dailyForecasts[forecastDate] = {
                        temperatureSum: forecast.main.temp,
                        count: 1,
                        icon: forecast.weather[0].icon,
                        description: forecast.weather[0].description,
                        unixTime: forecast.dt_txt,
                        wind: forecast.wind.speed
                    };
                } else {
                    dailyForecasts[forecastDate].temperatureSum += forecast.main.temp;
                    dailyForecasts[forecastDate].count += 1;
                    dailyForecasts[forecastDate].icon = forecast.weather[0].icon;
                    dailyForecasts[forecastDate].description = forecast.weather[0].description;
                    dailyForecasts[forecastDate].unixTime = forecast.dt_txt;
                    dailyForecasts[forecastDate].wind = forecast.wind.speed
                }
            }
        });

        let allInfo = [];

        // Calculate the average temperature, and display icon and description for each day (excluding today)
        for (const date in dailyForecasts) {
            const dailyData = dailyForecasts[date];
            const averageTemperature = dailyData.temperatureSum / dailyData.count;

            allInfo.push({
                date: date,
                unixDate: dailyData.unixTime,
                averageTemp: `${averageTemperature.toFixed(0)}`,
                icon: dailyData.icon,
                description: dailyData.description,
                wind: dailyData.wind
            })
        }

        return allInfo;
    }

    const showHourlyForecastHandler = (e) => {
        //Show detailed forecast only on user's location
        if (showHourlyForecast) {
            setShowByHours(true);
        } else {
            e.preventDefault();
        }
    }

    return <>
        <div className='five-days-forecast-wrapper'>
            <h2>{cityName} - 5 days weather forecast</h2>
            <ul className="forecast-container">
                {filterFiveDaysWeather().map((day, i) => (
                    <div
                        key={Math.random() + 1}
                        className={`${i === isDetailedViewActivate ? "active-box" : ""} weather-box`}
                        onClick={(e) => {
                            setDayDate(day.unixDate);
                            showHourlyForecastHandler(e);
                            setIsDetailedViewActivate(i);
                        }}
                        data-testid="weather-box"
                    >
                        <WeatherInfoBox
                            iconName={day.icon}
                            description={day.description}
                            date={day.date}
                            temp={day.averageTemp}
                            wind={day.wind}
                        />
                    </div>
                ))}
            </ul>
        </div>
        {showByHours && <WeatherByHours date={dayDate} fiveDaysWeatherData={fiveDaysWeatherData} />}
    </>
}

export default FiveDaysWeather;

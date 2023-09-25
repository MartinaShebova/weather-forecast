import { useLoaderData } from 'react-router-dom';
import { GLOBAL_GET_WEATHER_ICON_URL } from '../../globals';
import { useEffect, useState } from 'react';
import WeatherByHoursSlider from '../weatherByHoursSlider/WeatherByHoursSlider';
import WeatherInfoBox from '../weatherInfoBox/WeatherInfoBox';
import './FiveDaysWeather.css';

function FiveDaysWeather({ fiveDaysWeatherData, showHourlyForecast }) {
    const [showByHours, setShowByHours] = useState(false);
    const [dayDate, setDayDate] = useState(null);

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
                    // Use the last forecast's icon and description for the day

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
        if (showHourlyForecast) {
            setShowByHours(true);
        } else {
            e.preventDefault();
        }
    }

    return <>
        <div>
            <h2>Your 5 days weather forecast</h2>
            <div className="forecast-container">
                {filterFiveDaysWeather().map(day => (
                    <div key={Math.random() + 1} className="weather-box" onClick={(e) => {
                        setDayDate(day.unixDate);
                        showHourlyForecastHandler(e);
                    }}>
                        <WeatherInfoBox
                            iconName={day.icon}
                            description={day.description}
                            date={day.date}
                            temp={day.averageTemp}
                            wind={day.wind}
                        />
                    </div>
                ))}
            </div>
        </div>
        {showByHours && <WeatherByHoursSlider date={dayDate} fiveDaysWeatherData={fiveDaysWeatherData} />}
    </>
    return 1
}

export default FiveDaysWeather;

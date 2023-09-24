import { useLoaderData } from 'react-router-dom';
import { GLOBAL_GET_WEATHER_ICON_URL } from '../../globals';

function FiveDaysWeather() {
    const fiveDaysWeatherData = useLoaderData().fiveDaysWeather;

    const filterFiveDaysWeatherAtTwelve = () => {
        // Extract the list of forecasts from the API response
        const forecastList = fiveDaysWeatherData.list;

        // Get today's date
        const today = new Date().toLocaleDateString();

        // Initialize an object to store daily forecast data (excluding today)
        const dailyForecasts = {};

        // Loop through the forecast list and store daily forecast data (excluding today)
        forecastList.forEach((forecast) => {
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
                        description: forecast.weather[0].main,
                    };
                } else {
                    dailyForecasts[forecastDate].temperatureSum += forecast.main.temp;
                    dailyForecasts[forecastDate].count += 1;
                    // Use the last forecast's icon and description for the day
                    dailyForecasts[forecastDate].icon = forecast.weather[0].icon;
                    dailyForecasts[forecastDate].description = forecast.weather[0].main;
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
                averageTemp: `${averageTemperature.toFixed(2)}°C`,
                icon: dailyData.icon,
                description: dailyData.description
            })

        }

        console.log(allInfo);

        return allInfo;
    }

    filterFiveDaysWeatherAtTwelve()

    return <div>
        <h1>5-Day Weather Forecast</h1>
        <div className="forecast-container">
            {filterFiveDaysWeatherAtTwelve().map(day => (
                <div key={Math.random() + 1} className="weather-box">
                    <div className="weather-icon">
                        <img
                            src={GLOBAL_GET_WEATHER_ICON_URL(day.icon)}
                            alt={day.description}
                        />
                    </div>
                    <div className="weather-details">
                        <div className="weather-date">
                            {day.date}
                        </div>
                        <div className="weather-temperature">
                            Average Temperature: {day.averageTemp}
                        </div>
                        <div className="weather-description">
                            {day.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default FiveDaysWeather;

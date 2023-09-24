import { OPEN_WEATHER_API_KEY } from "../globals";

export const GET_GEOLOCATION_BY_CITY_NAME_URL = (cityName = "London") => `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;
export const GET_5_DAYS_WEATHER_FORECAST_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;
export const GET_CITY_WEATHER = (cityName = "London") => `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${OPEN_WEATHER_API_KEY}`;
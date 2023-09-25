import { OPEN_WEATHER_API_KEY, FAVOURITE_CITY_NAME } from "../globals";

export const GET_5_DAYS_WEATHER_FORECAST_URL_BY_COORDINATES = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;
export const GET_5_DAYS_WEATHER_FORECAST_URL_BY_LOCATION = (cityName = FAVOURITE_CITY_NAME) => `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

export const GET_CITY_WEATHER = (cityName = FAVOURITE_CITY_NAME) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

export const GET_WEATHER_ICON_URL = (iconName) => `https://openweathermap.org/img/wn/${iconName}@2x.png`;
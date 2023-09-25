import FavouriteCityCurrentWeather from "./favouriteCityCurrentWeather/FavouriteCityCurrentWeather";
import FiveDaysWeather from "../../components/fiveDaysWeather/FiveDaysWeather";
import { getRequest } from "../../backend-services/rest.service.methods";
import { GET_CITY_WEATHER, GET_5_DAYS_WEATHER_FORECAST_URL_BY_LOCATION } from "../../backend-services/endpointsUrls";
import { useLoaderData } from 'react-router-dom';

function FavouriteCityWeather() {
    const fiveDaysWeatherData = useLoaderData().fiveDaysWeather;

    return <>
        <FavouriteCityCurrentWeather />
        <FiveDaysWeather fiveDaysWeatherData={fiveDaysWeatherData} />
    </>
}

export default FavouriteCityWeather;

export async function favouriteCityLoader() {
    return {
        currentWeather: (await getRequest(GET_CITY_WEATHER())).data,
        fiveDaysWeather: (await getRequest(GET_5_DAYS_WEATHER_FORECAST_URL_BY_LOCATION())).data.list,
    }
}
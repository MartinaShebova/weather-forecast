import { getRequest } from "../../backend-services/rest.service.methods";
import { GET_CITY_WEATHER } from "../../backend-services/endpointsUrls";

export async function currentWeatherLoader() {
    return (await getRequest(GET_CITY_WEATHER())).data;
}
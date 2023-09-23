import { useEffect } from 'react';
import './App.css';
import { getRequest } from './backend-services/rest.service.methods';
import { GET_GEOLOCATION_BY_CITY_NAME_URL, GET_5_DAYS_WEATHER_FORECAST_URL, GET_CITY_WEATHER } from './backend-services/endpointsUrls';
import Layout from './components/layout/Layout';
import { RouterProvider } from "react-router-dom";
import routes from './routes';

function App() {

	// useEffect(() => {
	// 	getRequest(GET_CITY_WEATHER())
	// 		.then((data) => {
	// 			console.log(data);

	// 		})

	// }, []);

	return (
		<div className="App">
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;

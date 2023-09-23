import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import UserLocationWeather from "./components/userLocationWeather/UserLocationWeather";
import About from "./components/about/About";
import { currentWeatherLoader } from "./components/currentWeather/loader";

export default createBrowserRouter([
    {
        element: <Layout />,
        // loader: rootLoader,
        children: [
            {
                index: true,
                element: <CurrentWeather />,
                loader: currentWeatherLoader
            },
            {
                path: "your-location",
                element: <UserLocationWeather />
            },
            {
                path: "about",
                element: <About />
            },
        ],
    },
]);
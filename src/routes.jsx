import { createBrowserRouter } from "react-router-dom";
import Layout from './layout/Layout';
import UserLocationWeather from "./pages/userLocationWeather/UserLocationWeather";
import About from "./pages/about/About";
import FavouriteCityWeather from "./pages/favouriteCityWeather/FavouriteCityWeather";
import { favouriteCityLoader } from "./pages/favouriteCityWeather/FavouriteCityWeather";

export default createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <FavouriteCityWeather />,
                loader: favouriteCityLoader
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
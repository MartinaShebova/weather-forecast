import { createBrowserRouter } from "react-router-dom";
import Layout from './layout/Layout';
import UserLocationWeather from "./pages/userLocationWeather/UserLocationWeather";
import About from "./pages/about/About";
import FavouriteCityWeather from "./pages/favouriteCityWeather/FavouriteCityWeather";
import { favouriteCityLoader } from "./pages/favouriteCityWeather/FavouriteCityWeather";
import ErrorPage from "./pages/errorPage/ErrorPage";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
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
            {
                path: "*",
                element: <ErrorPage />
            },
        ],
    },
]);
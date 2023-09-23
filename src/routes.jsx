import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        // loader: rootLoader,
        children: [
            // {
            //     path: "team",
            //     element: <Team />,
            //     loader: teamLoader,
            // },
        ],
    },
]);
import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../homeScreen";


const AllRoute = () => {

    const routing = useRoutes([
        {
            path: "/",
            element: <HomeScreen />
        }
    ])

    return routing

}

export default AllRoute
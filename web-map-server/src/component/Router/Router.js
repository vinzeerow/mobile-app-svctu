import * as React from "react";
import { createBrowserRouter,} from "react-router-dom";
import MapPage from "../../view/user/map/map";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MapPage/>,
    },
]);
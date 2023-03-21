import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import PricingPage from "./PricingPage.jsx";
import Features from "./Features.jsx";
import GetStoreData from "./GetStoreData.jsx";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<Navigate to="/home" replace />
    },{
        path: "/home",
        element: <HomePage />,
    },  {
        path: "/about",
        element: <AboutUsPage />,
    }, {
        path: "/pricing",
        element: <PricingPage />,
    }, {
        path: "/features",
        element: <Features />,
    }, {
        path: "/accessstore",
        element: <GetStoreData />,
    }
]);
export default MainRoutes;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/Home/Services/ServiceDetails';

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/serviceDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('./data.json')
            }
        ]
    }
])

export default myCreatedRoute;
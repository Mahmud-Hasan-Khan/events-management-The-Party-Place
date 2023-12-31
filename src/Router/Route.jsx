// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/Home/Services/ServiceDetails';
import PrivateRoute from './PrivateRoute';
import BrandActivation from '../Pages/BrandActivation/BrandActivation';
import RentEquipments from '../Pages/RentEquipments/RentEquipments';

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
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/brandActivation",
                element: <PrivateRoute><BrandActivation></BrandActivation></PrivateRoute>
            },
            {
                path: "/equipmentsRental",
                element: <PrivateRoute><RentEquipments></RentEquipments> </PrivateRoute>,
                loader: () => fetch("/rentEquipment.json")
            }
        ]
    }
])

export default myCreatedRoute;
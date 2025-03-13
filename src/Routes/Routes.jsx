import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Error/Error';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Destination from '../Pages/Destination/Destination';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/Destination',
                element: <Destination></Destination>
            }
        ]
    },
]
);
export default router;
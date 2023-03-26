import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home/Home'
import Filters from './pages/Filters/Filters'
import { RouterProvider } from "react-router"


import './App.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path:'/filters',
        element: <Filters/>,
    },
    {
        path: '/recommended',
        element: ''
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router}/>
        
    );
}